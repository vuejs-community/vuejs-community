// Pipeline：严格按五个阶段编排。任何必要数据失败或缺失时，本次快照不发布。

import type { PipelineClock } from './clock'
import type { ActiveSyncStage, CompletePluginSnapshot, HostPolicy, PluginDefinition, Presence, ReplicationBounds, RequestFailure, Result, StateStore, SyncRun } from './contracts'
import type { HostScheduler } from './host-scheduler'
import type { SnapshotPublisher } from './snapshot-publisher'
import { randomUUID } from 'node:crypto'
import { isValidIsoUtcTimestamp } from './clock'
import {

  failure,

  ok,

} from './contracts'
import { createGitHubClient } from './github-client'
import { createHostScheduler } from './host-scheduler'
import { createDownloadsClient } from './npm-downloads-client'
import { createRegistryClient } from './npm-registry-client'
import { createReplicationClient } from './replication-client'
import { collectPackageGitHubTargets, collectUniqueGitHubTargets } from './repository-parser'
import { validateCompleteSnapshot } from './snapshot-validator'

export interface PipelineDependencies {
  store: StateStore
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

function describeFailure(failureInfo: RequestFailure): string {
  switch (failureInfo.kind) {
    case 'network':
      return `network: ${failureInfo.message}`
    case 'timeout':
      return `timeout after ${failureInfo.timeoutMs}ms`
    case 'http':
      return `http ${failureInfo.status}: ${failureInfo.body.slice(0, 200)}`
    case 'schema':
      return `schema: ${failureInfo.issues.join('; ')}`
    case 'invariant':
      return `invariant: ${failureInfo.message}`
    case 'storage':
      return `storage ${failureInfo.operation}: ${failureInfo.message}`
    case 'publish':
      return `publish ${failureInfo.operation}: ${failureInfo.message}`
  }
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

  // Run 生命周期：恢复同 Run 断点续传，或创建新 Run。
  const resumable = await dependencies.store.findResumableRun()
  if (!resumable.ok)
    return resumable

  let run: SyncRun
  if (resumable.value.state === 'present') {
    run = resumable.value.value
    console.log(`[pipeline] resuming run ${run.runId} (businessDate=${run.businessDate}) at stage=${run.status === 'running' ? run.stage : 'replication'}`)
  }
  else {
    const created: SyncRun = {
      runId: randomUUID(),
      businessDate: startedAt.slice(0, 10),
      startedAt,
      updatedAt: dependencies.clock.nowIso(),
      status: 'running',
      stage: 'replication',
      replication: { state: 'absent' },
    }
    const saved = await dependencies.store.createRun(created)
    if (!saved.ok)
      return failure(saved.error)
    run = saved.value
    console.log(`[pipeline] started run ${run.runId} (businessDate=${run.businessDate})`)
  }
  const runIdentity = {
    runId: run.runId,
    businessDate: run.businessDate,
    startedAt: run.startedAt,
  }
  const currentBounds = (): Presence<ReplicationBounds> => run.status === 'complete'
    ? { state: 'present', value: run.replication }
    : run.replication

  async function advanceStage(stage: ActiveSyncStage): Promise<Result<boolean, RequestFailure>> {
    const updated: SyncRun = {
      ...runIdentity,
      updatedAt: dependencies.clock.nowIso(),
      status: 'running',
      stage,
      replication: currentBounds(),
    }
    const saved = await dependencies.store.updateRun(updated)
    if (!saved.ok)
      return failure(saved.error)
    run = saved.value
    return ok(true)
  }

  async function failRun(stage: ActiveSyncStage, failureInfo: RequestFailure): Promise<Result<CompletePluginSnapshot, RequestFailure>> {
    const failedRun: SyncRun = {
      ...runIdentity,
      updatedAt: dependencies.clock.nowIso(),
      status: 'failed',
      failedAt: dependencies.clock.nowIso(),
      failedStage: stage,
      replication: currentBounds(),
      failureMessage: describeFailure(failureInfo),
    }
    const saved = await dependencies.store.updateRun(failedRun)
    if (!saved.ok)
      console.error(`[pipeline] failed to persist run failure state`, saved.error)
    return failure(failureInfo)
  }

  // 调度器与客户端装配。
  const schedulers: Record<'replication' | 'npm-registry' | 'npm-downloads' | 'github', HostScheduler> = {
    'replication': createHostScheduler(dependencies.replicationPolicy),
    'npm-registry': createHostScheduler(dependencies.npmRegistryPolicy),
    'npm-downloads': createHostScheduler(dependencies.npmDownloadsPolicy),
    'github': createHostScheduler(dependencies.githubPolicy),
  }
  const replicationClient = createReplicationClient({
    scheduler: schedulers.replication,
    store: dependencies.store,
    runId: run.runId,
  })
  const registryClient = createRegistryClient({
    scheduler: schedulers['npm-registry'],
    store: dependencies.store,
    runId: run.runId,
  })
  const downloadsClient = createDownloadsClient({
    scheduler: schedulers['npm-downloads'],
    store: dependencies.store,
    runId: run.runId,
  })
  const githubClient = createGitHubClient({
    scheduler: schedulers.github,
    store: dependencies.store,
    runId: run.runId,
    token: dependencies.githubToken,
  })

  // 阶段一：Replication 全量扫描。
  const advancedReplication = await advanceStage('replication')
  if (!advancedReplication.ok)
    return failure(advancedReplication.error)
  const replication = await replicationClient.createReplicationSnapshot(definitions)
  if (!replication.ok)
    return failRun('replication', replication.error)
  const savedSnapshot = await dependencies.store.saveReplicationSnapshot(run.runId, replication.value)
  if (!savedSnapshot.ok)
    return failRun('replication', savedSnapshot.error)

  // 阶段二：每日全量 Package Metadata。
  const advancedMetadata = await advanceStage('metadata')
  if (!advancedMetadata.ok)
    return failure(advancedMetadata.error)
  const metadata = await registryClient.fetchAllPackageMetadata(replication.value)
  if (!metadata.ok)
    return failRun('metadata', metadata.error)

  // 阶段三：每日全量 Downloads。
  const advancedDownloads = await advanceStage('downloads')
  if (!advancedDownloads.ok)
    return failure(advancedDownloads.error)
  const periods = await downloadsClient.resolveDownloadPeriods()
  if (!periods.ok)
    return failRun('downloads', periods.error)
  const dailyPeriod = periods.value[0]
  const monthlyPeriod = periods.value[1]
  const downloads = await downloadsClient.fetchAllDownloads(
    replication.value.packages.map(item => item.packageName),
    dailyPeriod,
    monthlyPeriod,
  )
  if (!downloads.ok)
    return failRun('downloads', downloads.error)

  // 阶段四：每日全量 GitHub 条件检查。
  const advancedGithub = await advanceStage('github')
  if (!advancedGithub.ok)
    return failure(advancedGithub.error)
  const packageTargets = collectPackageGitHubTargets(metadata.value)
  if (!packageTargets.ok)
    return failRun('github', packageTargets.error)
  const repositoryTargets = collectUniqueGitHubTargets(packageTargets.value)
  if (!repositoryTargets.ok)
    return failRun('github', repositoryTargets.error)
  console.log(`[github] ${repositoryTargets.value.length} unique repository target(s) from ${packageTargets.value.length} package(s)`)
  const githubRecords = await githubClient.fetchAllGitHubRepositories(repositoryTargets.value)
  if (!githubRecords.ok)
    return failRun('github', githubRecords.error)
  const github = githubClient.mapGitHubRecordsToPackages(packageTargets.value, githubRecords.value)
  if (!github.ok)
    return failRun('github', github.error)

  // 阶段五：构建并发布完整快照。
  const advancedValidation = await advanceStage('validation')
  if (!advancedValidation.ok)
    return failure(advancedValidation.error)
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
    return failRun('validation', snapshot.error)

  const advancedPublishing = await advanceStage('publishing')
  if (!advancedPublishing.ok)
    return failure(advancedPublishing.error)
  const staged = await dependencies.publisher.writeSnapshotToStage(snapshot.value)
  if (!staged.ok)
    return failRun('publishing', staged.error)
  const published = await dependencies.publisher.publishStage(staged.value, snapshot.value)
  if (!published.ok)
    return failRun('publishing', published.error)
  const savedPublished = await dependencies.store.savePublishedSnapshot(published.value, snapshot.value)
  if (!savedPublished.ok)
    return failRun('publishing', savedPublished.error)

  const completedRun: SyncRun = {
    ...runIdentity,
    updatedAt: dependencies.clock.nowIso(),
    status: 'complete',
    completedAt: dependencies.clock.nowIso(),
    replication: {
      startSequence: replication.value.startSequence,
      endSequence: replication.value.endSequence,
    },
  }
  const savedRun = await dependencies.store.updateRun(completedRun)
  if (!savedRun.ok)
    return failure(savedRun.error)

  console.log(`[pipeline] snapshot ${snapshot.value.snapshotId} published to ${published.value.publishedPath} with ${snapshot.value.entries.length} entries`)
  return ok(snapshot.value)
}
