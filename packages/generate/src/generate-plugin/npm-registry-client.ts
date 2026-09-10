// 阶段二：每日全量 Package Metadata 条件请求。
// 有缓存实体与 Last-Modified 时发送 If-Modified-Since；304 必须与缓存严格匹配。

import type { CacheStore, HttpHeader, HttpRequest, PackageMetadataCache, PackageMetadataOutcome, PackageMetadataRecord, PackageTarget, Presence, ReplicationSnapshot, RequestFailure, Result } from './contracts'
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
  cacheStore: CacheStore
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

export async function fetchPackageMetadata(
  dependencies: RegistryClientDependencies,
  target: PackageTarget,
  cache: Presence<PackageMetadataCache>,
): Promise<Result<PackageMetadataOutcome, RequestFailure>> {
  const request = createPackageMetadataRequest(target, cache, dependencies.scheduler.policy.requestTimeoutMs)
  const scheduled = await executeScheduled(request, dependencies.scheduler)
  if (!scheduled.ok)
    return failure(scheduled.error.failure)

  const { response, attempts } = scheduled.value

  if (response.kind === 'not-modified') {
    if (cache.state !== 'present') {
      return failure({
        kind: 'invariant',
        message: `npm registry returned 304 for "${target.packageName}" without a local cache entity`,
      })
    }
    if (cache.value.packageName !== target.packageName) {
      return failure({
        kind: 'invariant',
        message: `npm registry cache entity "${cache.value.packageName}" does not match the requested package "${target.packageName}"`,
      })
    }
    if (!isValidResponseHash(cache.value.responseHash)) {
      return failure({
        kind: 'invariant',
        message: `npm registry cache hash for "${target.packageName}" failed validation`,
      })
    }
    if (cache.value.lastModified.state !== 'present') {
      return failure({
        kind: 'invariant',
        message: `npm registry returned 304 for "${target.packageName}" but the cache entity has no Last-Modified validator`,
      })
    }

    const record: PackageMetadataRecord = {
      validation: 'response-304',
      target,
      metadata: cache.value.metadata,
      cacheValidator: cache.value.lastModified.value,
    }
    return ok({ record, cache: cache.value, attempts })
  }

  const decoded = decodePackageMetadata(response.body, target.packageName)
  if (!decoded.ok)
    return decoded

  const cacheEntry: PackageMetadataCache = {
    packageName: target.packageName,
    requestUrl: request.url,
    lastModified: response.metadata.lastModified,
    responseHash: sha256Hex(response.body),
    metadata: decoded.value,
  }
  const saved = dependencies.cacheStore.saveMetadataCache(cacheEntry)
  if (!saved.ok)
    return failure(saved.error)
  const record: PackageMetadataRecord = {
    validation: 'response-200',
    target,
    metadata: decoded.value,
    cacheValidator: response.metadata.lastModified,
  }
  return ok({ record, cache: cacheEntry, attempts })
}

export async function fetchAllPackageMetadata(
  dependencies: RegistryClientDependencies,
  snapshot: ReplicationSnapshot,
): Promise<Result<readonly PackageMetadataRecord[], RequestFailure>> {
  const caches = dependencies.cacheStore.readMetadataCaches()
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
