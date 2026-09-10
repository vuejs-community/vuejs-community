// 阶段二：每日全量 Package Metadata 条件请求。
// 有缓存实体与 Last-Modified 时发送 If-Modified-Since；304 必须与缓存严格匹配。

import type { HttpHeader, HttpRequest, PackageMetadataCache, PackageMetadataOutcome, PackageMetadataRecord, PackageTarget, Presence, ReplicationSnapshot, RequestFailure, Result, StateStore } from './contracts'
import type { HostScheduler } from './host-scheduler'
import {
  absent,
  failure,

  ok,

  present,

} from './contracts'
import { executeScheduled } from './host-scheduler'
import { decodePackageMetadata } from './schemas'
import { isValidResponseHash, sha256Hex } from './utils'

const REGISTRY_ENDPOINT = 'https://registry.npmjs.org'

export interface RegistryClientDependencies {
  scheduler: HostScheduler
  store: StateStore
  runId: string
}

export function createPackageMetadataRequest(
  target: PackageTarget,
  cache: Presence<PackageMetadataCache>,
  timeoutMs: number,
): HttpRequest {
  const requestUrl = `${REGISTRY_ENDPOINT}/${encodeURIComponent(target.packageName)}/latest`
  const headers: HttpHeader[] = [{ name: 'accept', value: 'application/json' }]
  if (cache.state === 'present' && cache.value.lastModified.state === 'present')
    headers.push({ name: 'If-Modified-Since', value: cache.value.lastModified.value })
  return {
    host: 'npm-registry',
    method: 'GET',
    url: requestUrl,
    headers,
    timeoutMs,
  }
}

function metadataTaskKey(target: PackageTarget): string {
  return target.packageName
}

export async function fetchPackageMetadata(
  dependencies: RegistryClientDependencies,
  target: PackageTarget,
  cache: Presence<PackageMetadataCache>,
): Promise<Result<PackageMetadataOutcome, RequestFailure>> {
  const taskKey = metadataTaskKey(target)
  const request = createPackageMetadataRequest(target, cache, dependencies.scheduler.policy.requestTimeoutMs)
  const scheduled = await executeScheduled(request, dependencies.scheduler)

  if (!scheduled.ok) {
    const recorded = await dependencies.store.recordTaskFailure(
      dependencies.runId,
      'npm-registry',
      taskKey,
      scheduled.error.attempts,
      scheduled.error.failure,
    )
    if (!recorded.ok) {
      console.error(`failed to record metadata task failure for "${taskKey}"`, scheduled.error.failure)
      return failure(recorded.error)
    }
    return failure(scheduled.error.failure)
  }

  const { response, attempts } = scheduled.value

  if (response.kind === 'not-modified') {
    if (cache.state !== 'present') {
      const failureInfo: RequestFailure = {
        kind: 'invariant',
        message: `npm registry returned 304 for "${target.packageName}" without a local cache entity`,
      }
      await dependencies.store.recordTaskFailure(dependencies.runId, 'npm-registry', taskKey, attempts, failureInfo)
      return failure(failureInfo)
    }
    if (cache.value.packageName !== target.packageName) {
      const failureInfo: RequestFailure = {
        kind: 'invariant',
        message: `npm registry cache entity "${cache.value.packageName}" does not match the requested package "${target.packageName}"`,
      }
      await dependencies.store.recordTaskFailure(dependencies.runId, 'npm-registry', taskKey, attempts, failureInfo)
      return failure(failureInfo)
    }
    if (!isValidResponseHash(cache.value.responseHash)) {
      const failureInfo: RequestFailure = {
        kind: 'invariant',
        message: `npm registry cache hash for "${target.packageName}" failed validation`,
      }
      await dependencies.store.recordTaskFailure(dependencies.runId, 'npm-registry', taskKey, attempts, failureInfo)
      return failure(failureInfo)
    }
    if (cache.value.lastModified.state !== 'present') {
      const failureInfo: RequestFailure = {
        kind: 'invariant',
        message: `npm registry returned 304 for "${target.packageName}" but the cache entity has no Last-Modified validator`,
      }
      await dependencies.store.recordTaskFailure(dependencies.runId, 'npm-registry', taskKey, attempts, failureInfo)
      return failure(failureInfo)
    }

    const record: PackageMetadataRecord = {
      validation: 'response-304',
      target,
      metadata: cache.value.metadata,
      cacheValidator: cache.value.lastModified.value,
    }
    const saved = await dependencies.store.savePackageMetadata(dependencies.runId, [
      { record, cache: cache.value, attempts },
    ])
    if (!saved.ok)
      return failure(saved.error)
    return ok({ record, cache: cache.value, attempts })
  }

  const decoded = decodePackageMetadata(response.body, target.packageName)
  if (!decoded.ok) {
    await dependencies.store.recordTaskFailure(dependencies.runId, 'npm-registry', taskKey, attempts, decoded.error)
    return decoded
  }

  const cacheEntry: PackageMetadataCache = {
    packageName: target.packageName,
    requestUrl: request.url,
    lastModified: response.metadata.lastModified,
    responseHash: sha256Hex(response.body),
    metadata: decoded.value,
  }
  const record: PackageMetadataRecord = {
    validation: 'response-200',
    target,
    metadata: decoded.value,
    cacheValidator: response.metadata.lastModified,
  }
  const saved = await dependencies.store.savePackageMetadata(dependencies.runId, [
    { record, cache: cacheEntry, attempts },
  ])
  if (!saved.ok)
    return failure(saved.error)
  return ok({ record, cache: cacheEntry, attempts })
}

export async function fetchAllPackageMetadata(
  dependencies: RegistryClientDependencies,
  snapshot: ReplicationSnapshot,
): Promise<Result<readonly PackageMetadataRecord[], RequestFailure>> {
  const caches = await dependencies.store.readPackageMetadataCaches()
  if (!caches.ok)
    return caches
  const cacheMap = new Map(caches.value.map(entry => [entry.packageName, entry]))

  const outcomes: PackageMetadataOutcome[] = []
  const failures: { packageName: string, failure: RequestFailure }[] = []
  let completed = 0

  await Promise.all(snapshot.packages.map(async (target) => {
    const existing = cacheMap.get(target.packageName)
    const cache = existing ? present(existing) : absent<PackageMetadataCache>()
    const outcome = await fetchPackageMetadata(dependencies, target, cache)
    if (outcome.ok) {
      outcomes.push(outcome.value)
    }
    else {
      failures.push({ packageName: target.packageName, failure: outcome.error })
    }
    completed += 1
    if (completed % 500 === 0)
      console.log(`[npm-registry] ${completed}/${snapshot.packages.length} metadata checks completed`)
  }))

  if (failures.length > 0) {
    failures.sort((left, right) => left.packageName.localeCompare(right.packageName))
    const first = failures.at(0)
    if (typeof first !== 'object') {
      return failure({
        kind: 'invariant',
        message: 'metadata failure list is empty despite reported failures',
      })
    }
    console.error(`[npm-registry] ${failures.length} metadata check(s) failed; first failure for "${first.packageName}"`)
    return failure(first.failure)
  }

  if (outcomes.length !== snapshot.packages.length) {
    return failure({
      kind: 'invariant',
      message: `metadata outcomes (${outcomes.length}) do not cover the replication snapshot (${snapshot.packages.length})`,
    })
  }

  const records = outcomes.map(outcome => outcome.record)
  records.sort((left, right) => left.target.packageName.localeCompare(right.target.packageName))
  console.log(`[npm-registry] all ${records.length} metadata checks completed`)
  return ok(records)
}

export function createRegistryClient(dependencies: RegistryClientDependencies) {
  return {
    fetchPackageMetadata: (target: PackageTarget, cache: Presence<PackageMetadataCache>) =>
      fetchPackageMetadata(dependencies, target, cache),
    fetchAllPackageMetadata: (snapshot: ReplicationSnapshot) => fetchAllPackageMetadata(dependencies, snapshot),
  }
}
