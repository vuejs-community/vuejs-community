// 阶段一：Replication 全量扫描。
// 前缀范围过滤、最后一行 key 游标分页、changes 补齐扫描期间的增删。

import type { HttpRequest, PackageTarget, PluginDefinition, Presence, ReplicationChange, ReplicationInfo, ReplicationSnapshot, RequestFailure, Result } from './contracts'
import type { HostScheduler } from './host-scheduler'
import {
  absent,
  failure,

  ok,

  present,

} from './contracts'
import { executeScheduled } from './host-scheduler'
import { decodeReplicationChangesPage, decodeReplicationInfo, decodeReplicationPage } from './schemas'

const REPLICATION_ENDPOINT = 'https://replicate.npmjs.com/registry'
const PAGE_SIZE = 1000

export interface ReplicationClientDependencies {
  scheduler: HostScheduler
}

function replicationRequest(dependencies: ReplicationClientDependencies, url: string): HttpRequest {
  return {
    host: 'replication',
    method: 'GET',
    url,
    headers: [{ name: 'accept', value: 'application/json' }],
    timeoutMs: dependencies.scheduler.policy.requestTimeoutMs,
  }
}

async function requestReplicationBody(
  dependencies: ReplicationClientDependencies,
  url: string,
): Promise<Result<string, RequestFailure>> {
  const scheduled = await executeScheduled(replicationRequest(dependencies, url), dependencies.scheduler)
  if (!scheduled.ok)
    return failure(scheduled.error.failure)
  if (scheduled.value.response.kind !== 'body') {
    return failure({
      kind: 'invariant',
      message: `replication endpoint "${url}" returned an unexpected not-modified response`,
    })
  }
  return ok(scheduled.value.response.body)
}

export async function fetchReplicationInfo(
  dependencies: ReplicationClientDependencies,
): Promise<Result<ReplicationInfo, RequestFailure>> {
  const body = await requestReplicationBody(dependencies, `${REPLICATION_ENDPOINT}/`)
  if (!body.ok)
    return body
  const decoded = decodeReplicationInfo(body.value)
  if (!decoded.ok)
    return decoded
  if (decoded.value.databaseName !== 'registry') {
    return failure({
      kind: 'invariant',
      message: `replication database name "${decoded.value.databaseName}" is not "registry"`,
    })
  }
  return ok(decoded.value)
}

export function buildAllDocsUrl(
  definition: PluginDefinition,
  cursor: Presence<string>,
): string {
  const url = new URL(`${REPLICATION_ENDPOINT}/_all_docs`)
  const startKey = cursor.state === 'present' ? cursor.value : definition.packageNamePrefix
  url.searchParams.set('startkey', JSON.stringify(startKey))
  url.searchParams.set('endkey', JSON.stringify(`${definition.packageNamePrefix}\uFFF0`))
  url.searchParams.set('limit', String(cursor.state === 'present' ? PAGE_SIZE + 1 : PAGE_SIZE))
  return url.toString()
}

// startkey 包含边界：后续页请求 PAGE_SIZE + 1，第一条仍等于上页 cursor 时才移除。
// cursor 恰好被删除时不能盲目 skip，避免漏掉下一条。
export async function collectPrefixPackages(
  dependencies: ReplicationClientDependencies,
  definition: PluginDefinition,
): Promise<Result<readonly PackageTarget[], RequestFailure>> {
  const targets: PackageTarget[] = []
  const seen = new Set<string>()
  let cursor: Presence<string> = absent()
  let page = 0

  while (true) {
    page += 1
    const url = buildAllDocsUrl(definition, cursor)
    const body = await requestReplicationBody(dependencies, url)
    if (!body.ok)
      return body
    const decoded = decodeReplicationPage(body.value)
    if (!decoded.ok)
      return decoded

    const rows = cursor.state === 'present' && decoded.value.rows[0]?.key === cursor.value
      ? decoded.value.rows.slice(1)
      : decoded.value.rows

    if (rows.length === 0)
      break

    let lastKey = ''
    for (const row of rows) {
      if (!row.packageName.startsWith(definition.packageNamePrefix)) {
        return failure({
          kind: 'invariant',
          message: `replication returned a package outside the "${definition.packageNamePrefix}" prefix: ${row.packageName}`,
        })
      }
      if (seen.has(row.packageName))
        continue
      seen.add(row.packageName)
      targets.push({
        packageName: row.packageName,
        revision: row.revision,
        definition,
      })
      lastKey = row.key
    }

    if (lastKey.length === 0) {
      return failure({
        kind: 'invariant',
        message: `replication page for prefix "${definition.packageNamePrefix}" produced no usable cursor`,
      })
    }

    cursor = present(lastKey)
    const requestedLimit = page === 1 ? PAGE_SIZE : PAGE_SIZE + 1
    if (decoded.value.rows.length < requestedLimit)
      break
  }

  targets.sort((left, right) => left.packageName.localeCompare(right.packageName))
  return ok(targets)
}

export function buildChangesUrl(since: number): string {
  const url = new URL(`${REPLICATION_ENDPOINT}/_changes`)
  url.searchParams.set('since', String(since))
  url.searchParams.set('limit', String(PAGE_SIZE))
  return url.toString()
}

export async function fetchChangesThrough(
  dependencies: ReplicationClientDependencies,
  startSequence: number,
  endSequence: number,
): Promise<Result<readonly ReplicationChange[], RequestFailure>> {
  const collected: ReplicationChange[] = []
  let since = startSequence
  let page = 0

  while (since < endSequence) {
    page += 1
    const body = await requestReplicationBody(dependencies, buildChangesUrl(since))
    if (!body.ok)
      return body
    const decoded = decodeReplicationChangesPage(body.value)
    if (!decoded.ok)
      return decoded

    for (const change of decoded.value.changes) {
      if (change.sequence <= startSequence)
        continue
      if (change.sequence > endSequence)
        continue
      collected.push(change)
    }

    if (decoded.value.lastSequence <= since) {
      return failure({
        kind: 'invariant',
        message: `replication changes cursor did not advance beyond ${since}`,
      })
    }
    since = decoded.value.lastSequence
  }

  return ok(collected)
}

// createReplicationSnapshot 算法：
// 1. 读取 startSequence；2. 顺序扫描全部前缀；3. 读取 endSequence；
// 4. 获取 (startSequence, endSequence] 内全部 changes；
// 5. 新增与更新 upsert，deleted 删除；6. 按 package name 去重；
// 7. 验证每个结果都满足对应前缀；8. 排序后返回不可变 ReplicationSnapshot。
export async function createReplicationSnapshot(
  dependencies: ReplicationClientDependencies,
  definitions: readonly PluginDefinition[],
): Promise<Result<ReplicationSnapshot, RequestFailure>> {
  const startInfo = await fetchReplicationInfo(dependencies)
  if (!startInfo.ok)
    return startInfo
  const startSequence = startInfo.value.updateSequence
  console.log(`[replication] scan started at update_seq=${startSequence}`)

  const collected: PackageTarget[] = []
  for (const definition of definitions) {
    const prefixTargets = await collectPrefixPackages(dependencies, definition)
    if (!prefixTargets.ok)
      return prefixTargets
    collected.push(...prefixTargets.value)
    console.log(`[replication] prefix "${definition.packageNamePrefix}" matched ${prefixTargets.value.length} package(s)`)
  }

  const endInfo = await fetchReplicationInfo(dependencies)
  if (!endInfo.ok)
    return endInfo
  const endSequence = endInfo.value.updateSequence

  const changes = await fetchChangesThrough(dependencies, startSequence, endSequence)
  if (!changes.ok)
    return changes

  const unique = new Map<string, PackageTarget>()
  for (const target of collected) {
    const existing = unique.get(target.packageName)
    if (existing) {
      if (existing.definition.packageNamePrefix !== target.definition.packageNamePrefix) {
        return failure({
          kind: 'invariant',
          message: `package "${target.packageName}" matched multiple plugin definitions`,
        })
      }
      continue
    }
    unique.set(target.packageName, target)
  }

  let appliedChanges = 0
  for (const change of changes.value) {
    const definition = definitions.find(item => change.packageName.startsWith(item.packageNamePrefix))
    if (typeof definition !== 'object')
      continue
    if (change.deleted) {
      unique.delete(change.packageName)
    }
    else {
      unique.set(change.packageName, {
        packageName: change.packageName,
        revision: change.revision,
        definition,
      })
    }
    appliedChanges += 1
  }

  const packages = [...unique.values()]
  for (const target of packages) {
    if (!target.packageName.startsWith(target.definition.packageNamePrefix)) {
      return failure({
        kind: 'invariant',
        message: `package "${target.packageName}" does not satisfy its prefix "${target.definition.packageNamePrefix}"`,
      })
    }
  }
  packages.sort((left, right) => left.packageName.localeCompare(right.packageName))

  console.log(`[replication] scan finished at update_seq=${endSequence}; ${changes.value.length} change(s) inspected, ${appliedChanges} applied, ${packages.length} package(s) total`)
  return ok({
    startSequence,
    endSequence,
    packages,
  })
}

export function createReplicationClient(dependencies: ReplicationClientDependencies) {
  return {
    fetchReplicationInfo: () => fetchReplicationInfo(dependencies),
    collectPrefixPackages: (definition: PluginDefinition) => collectPrefixPackages(dependencies, definition),
    fetchChangesThrough: (startSequence: number, endSequence: number) =>
      fetchChangesThrough(dependencies, startSequence, endSequence),
    createReplicationSnapshot: (definitions: readonly PluginDefinition[]) =>
      createReplicationSnapshot(dependencies, definitions),
  }
}
