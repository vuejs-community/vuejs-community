// 阶段四：每日全量 GitHub 条件检查。
// 相同仓库只请求一次；200 更新缓存并要求 ETag；304 必须与缓存 ETag/hash 一致；
// 存在 GitHub 链接但 API 未成功时整个快照失败，绝不把 Stars 写为 0。

import type { CacheStore, GitHubRepositoryCache, GitHubRepositoryOutcome, GitHubRepositoryRecord, GitHubRepositoryTarget, HttpHeader, HttpRequest, PackageGitHubData, PackageGitHubTarget, Presence, RequestFailure, Result } from './contracts'
import type { HostScheduler } from './host-scheduler'
import {
  absent,

  failure,

  ok,

  present,

} from './contracts'
import { executeScheduled } from './host-scheduler'
import { decodeGitHubRepository } from './schemas'
import { isValidResponseHash, sha256Hex } from './utils'

const GITHUB_ENDPOINT = 'https://api.github.com'

export interface GitHubClientDependencies {
  scheduler: HostScheduler
  cacheStore: CacheStore
  token: string
}

export function createGitHubRequest(
  target: GitHubRepositoryTarget,
  cache: Presence<GitHubRepositoryCache>,
  token: string,
  timeoutMs: number,
): HttpRequest {
  const requestUrl = `${GITHUB_ENDPOINT}/repos/${encodeURIComponent(target.owner)}/${encodeURIComponent(target.repository)}`
  const headers: HttpHeader[] = [
    { name: 'Authorization', value: `Bearer ${token}` },
    { name: 'Accept', value: 'application/vnd.github+json' },
    { name: 'X-GitHub-Api-Version', value: '2022-11-28' },
  ]
  if (cache.state === 'present')
    headers.push({ name: 'If-None-Match', value: cache.value.etag })
  return {
    host: 'github',
    method: 'GET',
    url: requestUrl,
    headers,
    timeoutMs,
  }
}

export async function fetchGitHubRepository(
  dependencies: GitHubClientDependencies,
  target: GitHubRepositoryTarget,
  cache: Presence<GitHubRepositoryCache>,
): Promise<Result<GitHubRepositoryOutcome, RequestFailure>> {
  const request = createGitHubRequest(target, cache, dependencies.token, dependencies.scheduler.policy.requestTimeoutMs)
  const scheduled = await executeScheduled(request, dependencies.scheduler)
  if (!scheduled.ok)
    return failure(scheduled.error.failure)

  const { response, attempts } = scheduled.value

  if (response.kind === 'not-modified') {
    if (cache.state !== 'present') {
      return failure({
        kind: 'invariant',
        message: `github returned 304 for "${target.fullName}" without a local cache entity`,
      })
    }
    if (cache.value.fullName.toLowerCase() !== target.fullName.toLowerCase()) {
      return failure({
        kind: 'invariant',
        message: `github cache entity "${cache.value.fullName}" does not match the requested repository "${target.fullName}"`,
      })
    }
    if (!isValidResponseHash(cache.value.responseHash)) {
      return failure({
        kind: 'invariant',
        message: `github cache hash for "${target.fullName}" failed validation`,
      })
    }

    const record: GitHubRepositoryRecord = {
      data: cache.value.data,
      etag: cache.value.etag,
      validation: 'response-304',
    }
    return ok({ record, nextCache: absent<GitHubRepositoryCache>(), attempts })
  }

  const decoded = decodeGitHubRepository(response.body, target.fullName)
  if (!decoded.ok)
    return decoded
  if (response.metadata.etag.state !== 'present') {
    return failure({
      kind: 'invariant',
      message: `github response for "${target.fullName}" does not carry an ETag validator`,
    })
  }

  const etag = response.metadata.etag.value
  const nextCache: GitHubRepositoryCache = {
    fullName: decoded.value.fullName,
    etag,
    responseHash: sha256Hex(response.body),
    data: decoded.value,
  }
  const saved = dependencies.cacheStore.saveGitHubCache(nextCache)
  if (!saved.ok)
    return failure(saved.error)
  const record: GitHubRepositoryRecord = {
    data: decoded.value,
    etag,
    validation: 'response-200',
  }
  return ok({ record, nextCache: present(nextCache), attempts })
}

export async function fetchAllGitHubRepositories(
  dependencies: GitHubClientDependencies,
  targets: readonly GitHubRepositoryTarget[],
): Promise<Result<readonly GitHubRepositoryRecord[], RequestFailure>> {
  const caches = dependencies.cacheStore.readGitHubCaches()
  if (!caches.ok)
    return caches
  const cacheMap = new Map(caches.value.map(entry => [entry.fullName.toLowerCase(), entry]))

  const outcomes: GitHubRepositoryOutcome[] = []
  const failures: { fullName: string, failure: RequestFailure }[] = []
  let completed = 0

  await Promise.all(targets.map(async (target) => {
    const existing = cacheMap.get(target.fullName.toLowerCase())
    const cache = existing ? present(existing) : absent<GitHubRepositoryCache>()
    const outcome = await fetchGitHubRepository(dependencies, target, cache)
    if (outcome.ok) {
      outcomes.push(outcome.value)
    }
    else {
      failures.push({ fullName: target.fullName, failure: outcome.error })
    }
    completed += 1
    if (completed % 100 === 0)
      console.log(`[github] ${completed}/${targets.length} repository checks completed`)
  }))

  if (failures.length > 0) {
    failures.sort((left, right) => left.fullName.localeCompare(right.fullName))
    const first = failures.at(0)
    if (typeof first !== 'object') {
      return failure({
        kind: 'invariant',
        message: 'github failure list is empty despite reported failures',
      })
    }
    console.error(`[github] ${failures.length} repository check(s) failed; first failure for "${first.fullName}"`)
    return failure(first.failure)
  }

  const records = outcomes.map(outcome => outcome.record)
  records.sort((left, right) => left.data.fullName.localeCompare(right.data.fullName))
  console.log(`[github] all ${records.length} repository checks completed`)
  return ok(records)
}

export function mapGitHubRecordsToPackages(
  packageTargets: readonly PackageGitHubTarget[],
  repositoryRecords: readonly GitHubRepositoryRecord[],
): Result<readonly PackageGitHubData[], RequestFailure> {
  const recordMap = new Map(repositoryRecords.map(record => [record.data.fullName.toLowerCase(), record]))
  const mapped: PackageGitHubData[] = []
  for (const target of packageTargets) {
    if (target.kind === 'absent') {
      mapped.push({ kind: 'absent', packageName: target.packageName })
      continue
    }
    const record = recordMap.get(target.target.fullName.toLowerCase())
    if (typeof record !== 'object') {
      return failure({
        kind: 'invariant',
        message: `github record for "${target.target.fullName}" is missing from successful responses`,
      })
    }
    mapped.push({
      kind: 'repository',
      packageName: target.packageName,
      repository: record,
    })
  }
  return ok(mapped)
}

export function createGitHubClient(dependencies: GitHubClientDependencies) {
  return {
    fetchGitHubRepository: (target: GitHubRepositoryTarget, cache: Presence<GitHubRepositoryCache>) =>
      fetchGitHubRepository(dependencies, target, cache),
    fetchAllGitHubRepositories: (targets: readonly GitHubRepositoryTarget[]) =>
      fetchAllGitHubRepositories(dependencies, targets),
    mapGitHubRecordsToPackages,
  }
}
