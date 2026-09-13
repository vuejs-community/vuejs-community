// Pipeline：严格按五个阶段编排。任何必要数据失败或缺失时，本次快照不发布。

import type { PipelineClock } from './clock'
import type { CacheStore, CompletePluginSnapshot, HostPolicy, PluginDefinition, RequestFailure, Result } from './contracts'
import type { HostScheduler } from './host-scheduler'
import type { SnapshotPublisher } from './snapshot-publisher'
import { isValidIsoUtcTimestamp } from './clock'
import { failure, ok } from './contracts'
import { createGitHubClient } from './github-client'
import { createHostScheduler } from './host-scheduler'
import { createDownloadsClient } from './npm-downloads-client'
import { createRegistryClient } from './npm-registry-client'
import { createReplicationClient } from './replication-client'
import { collectPackageGitHubTargets, collectUniqueGitHubTargets } from './repository-parser'
import { validateCompleteSnapshot } from './snapshot-validator'

export interface PipelineDependencies {
  cacheStore: CacheStore
  clock: PipelineClock
  replicationPolicy: HostPolicy
  npmRegistryPolicy: HostPolicy
  npmDownloadsPolicy: HostPolicy
  githubPolicy: HostPolicy
  githubToken: string
  publisher: SnapshotPublisher
}

export const DEFAULT_HOST_POLICIES: Readonly<Record<'replication' | 'npm-registry' | 'npm-downloads' | 'github', HostPolicy>> = {
  'replication': {
    host: 'replication',
    concurrency: 1,
    intervalMs: 1000,
    intervalCap: 2,
    requestTimeoutMs: 30000,
    maxAttemptsPerRun: 8,
    circuitBreakerThreshold: 10,
    circuitBreakerPauseMs: 180000,
  },
  'npm-registry': {
    host: 'npm-registry',
    concurrency: 3,
    intervalMs: 1000,
    intervalCap: 5,
    requestTimeoutMs: 30000,
    maxAttemptsPerRun: 8,
    circuitBreakerThreshold: 10,
    circuitBreakerPauseMs: 180000,
  },
  'npm-downloads': {
    host: 'npm-downloads',
    concurrency: 1,
    intervalMs: 750,
    intervalCap: 1,
    requestTimeoutMs: 30000,
    maxAttemptsPerRun: 8,
    circuitBreakerThreshold: 10,
    circuitBreakerPauseMs: 180000,
  },
  'github': {
    host: 'github',
    concurrency: 2,
    intervalMs: 1000,
    intervalCap: 2,
    requestTimeoutMs: 30000,
    maxAttemptsPerRun: 8,
    circuitBreakerThreshold: 10,
    circuitBreakerPauseMs: 180000,
  },
}

export async function runDailyPluginPipeline(
  dependencies: PipelineDependencies,
  definitions: readonly PluginDefinition[],
  startedAt: string,
): Promise<Result<CompletePluginSnapshot, RequestFailure>> {
  if (dependencies.githubToken.length === 0) {
    return failure({
      kind: 'invariant',
      message: 'github token is required for the daily pipeline',
    })
  }
  if (!isValidIsoUtcTimestamp(startedAt)) {
    return failure({
      kind: 'invariant',
      message: `pipeline startedAt "${startedAt}" is not an ISO 8601 UTC timestamp`,
    })
  }

  // 调度器与客户端装配。
  const schedulers: Record<'replication' | 'npm-registry' | 'npm-downloads' | 'github', HostScheduler> = {
    'replication': createHostScheduler(dependencies.replicationPolicy),
    'npm-registry': createHostScheduler(dependencies.npmRegistryPolicy),
    'npm-downloads': createHostScheduler(dependencies.npmDownloadsPolicy),
    'github': createHostScheduler(dependencies.githubPolicy),
  }
  const replicationClient = createReplicationClient({ scheduler: schedulers.replication })
  const registryClient = createRegistryClient({
    scheduler: schedulers['npm-registry'],
    cacheStore: dependencies.cacheStore,
  })
  const downloadsClient = createDownloadsClient({ scheduler: schedulers['npm-downloads'] })
  const githubClient = createGitHubClient({
    scheduler: schedulers.github,
    cacheStore: dependencies.cacheStore,
    token: dependencies.githubToken,
  })

  // 阶段一：Replication 全量扫描。
  console.log('[pipeline] stage 1/5: replication scan')
  const replication = await replicationClient.createReplicationSnapshot(definitions)
  if (!replication.ok)
    return failure(replication.error)

  // 阶段二：每日全量 Package Metadata。
  console.log('[pipeline] stage 2/5: package metadata checks')
  const metadata = await registryClient.fetchAllPackageMetadata(replication.value)
  // 无论阶段成败都先落盘已获得的缓存，重跑时这些包可以走 304。
  const metadataFlushed = dependencies.cacheStore.flush()
  if (!metadata.ok)
    return failure(metadata.error)
  if (!metadataFlushed.ok)
    return failure(metadataFlushed.error)

  // 阶段三：每日全量 Downloads。
  console.log('[pipeline] stage 3/5: downloads')
  const periods = await downloadsClient.resolveDownloadPeriods()
  if (!periods.ok)
    return failure(periods.error)
  const dailyPeriod = periods.value[0]
  const monthlyPeriod = periods.value[1]
  const downloads = await downloadsClient.fetchAllDownloads(
    replication.value.packages.map(item => item.packageName),
    dailyPeriod,
    monthlyPeriod,
  )
  if (!downloads.ok)
    return failure(downloads.error)

  // 阶段四：每日全量 GitHub 条件检查。
  console.log('[pipeline] stage 4/5: github repository checks')
  const packageTargets = collectPackageGitHubTargets(metadata.value)
  if (!packageTargets.ok)
    return failure(packageTargets.error)
  const repositoryTargets = collectUniqueGitHubTargets(packageTargets.value)
  if (!repositoryTargets.ok)
    return failure(repositoryTargets.error)
  console.log(`[github] ${repositoryTargets.value.length} unique repository target(s) from ${packageTargets.value.length} package(s)`)
  const githubRecords = await githubClient.fetchAllGitHubRepositories(repositoryTargets.value)
  const githubFlushed = dependencies.cacheStore.flush()
  if (!githubRecords.ok)
    return failure(githubRecords.error)
  if (!githubFlushed.ok)
    return failure(githubFlushed.error)
  const github = githubClient.mapGitHubRecordsToPackages(packageTargets.value, githubRecords.value)
  if (!github.ok)
    return failure(github.error)

  // 阶段五：构建并发布完整快照。
  console.log('[pipeline] stage 5/5: validate and publish snapshot')
  const snapshot = validateCompleteSnapshot(
    replication.value,
    metadata.value,
    downloads.value,
    github.value,
    dailyPeriod,
    monthlyPeriod,
    startedAt,
    dependencies.clock.nowIso(),
  )
  if (!snapshot.ok)
    return failure(snapshot.error)

  const staged = await dependencies.publisher.writeSnapshotToStage(snapshot.value)
  if (!staged.ok)
    return failure(staged.error)
  const published = await dependencies.publisher.publishStage(staged.value, snapshot.value)
  if (!published.ok)
    return failure(published.error)

  console.log(`[pipeline] snapshot ${snapshot.value.snapshotId} published to ${published.value.publishedPath} with ${snapshot.value.entries.length} entries`)
  return ok(snapshot.value)
}
