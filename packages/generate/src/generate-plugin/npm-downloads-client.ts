// 阶段三：每日全量 Downloads。
// 先用 anchor 包锚定统计周期，非 scoped 包走 bulk（<=100 且 URL <=7000 字符），
// scoped 包逐个请求；decoder 校验请求与响应集合完全一致。

import type { CompletedDownloadBatch, DownloadBatch, DownloadPeriod, DownloadPoint, HttpRequest, PackageDownloads, RequestFailure, Result, StateStore } from './contracts'
import type { HostScheduler } from './host-scheduler'
import {

  failure,

  ok,

} from './contracts'
import { executeScheduled } from './host-scheduler'
import {
  decodeAnchorDownloadPoint,
  decodeDownloadBulkResponse,
  decodeDownloadPoint,
  DOWNLOAD_BATCH_MAX_SIZE,
  DOWNLOAD_BATCH_MAX_URL_LENGTH,
} from './schemas'

const DOWNLOADS_ENDPOINT = 'https://api.npmjs.org/downloads'
const ANCHOR_PACKAGE_NAME = 'npm'

export interface DownloadsClientDependencies {
  scheduler: HostScheduler
  store: StateStore
  runId: string
}

function downloadsRequest(dependencies: DownloadsClientDependencies, url: string): HttpRequest {
  return {
    host: 'npm-downloads',
    method: 'GET',
    url,
    headers: [{ name: 'accept', value: 'application/json' }],
    timeoutMs: dependencies.scheduler.policy.requestTimeoutMs,
  }
}

async function requestDownloadsBody(
  dependencies: DownloadsClientDependencies,
  request: HttpRequest,
  taskKey: string,
): Promise<Result<string, RequestFailure>> {
  const scheduled = await executeScheduled(request, dependencies.scheduler)
  if (!scheduled.ok) {
    const recorded = await dependencies.store.recordTaskFailure(
      dependencies.runId,
      'npm-downloads',
      taskKey,
      scheduled.error.attempts,
      scheduled.error.failure,
    )
    if (!recorded.ok) {
      console.error(`failed to record downloads task failure for "${taskKey}"`, scheduled.error.failure)
      return failure(recorded.error)
    }
    return failure(scheduled.error.failure)
  }
  if (scheduled.value.response.kind !== 'body') {
    return failure({
      kind: 'invariant',
      message: `npm downloads endpoint "${request.url}" returned an unexpected not-modified response`,
    })
  }
  const recorded = await dependencies.store.recordTaskSuccess(
    dependencies.runId,
    'npm-downloads',
    taskKey,
    scheduled.value.attempts,
    scheduled.value.response.metadata.status,
  )
  if (!recorded.ok)
    return failure(recorded.error)
  return ok(scheduled.value.response.body)
}

function buildPointUrl(period: DownloadPeriod, packageName: string): string {
  return `${DOWNLOADS_ENDPOINT}/point/${period.apiPeriod}/${encodeURIComponent(packageName)}`
}

function buildBulkUrl(period: DownloadPeriod, packageNames: readonly string[]): string {
  const encoded = packageNames.map(name => encodeURIComponent(name)).join(',')
  return `${DOWNLOADS_ENDPOINT}/point/${period.apiPeriod}/${encoded}`
}

// 先锚定统计周期：禁止在本地猜测 npm 的最新完整统计日。
// 本轮后续所有包都使用显式日期，避免任务跨 UTC 日期边界后出现周期不一致。
export async function resolveDownloadPeriods(
  dependencies: DownloadsClientDependencies,
): Promise<Result<readonly [DownloadPeriod, DownloadPeriod], RequestFailure>> {
  const dailyBody = await requestDownloadsBody(
    dependencies,
    downloadsRequest(dependencies, buildPointUrl({ kind: 'daily', start: '', end: '', apiPeriod: 'last-day' }, ANCHOR_PACKAGE_NAME)),
    'anchor:last-day',
  )
  if (!dailyBody.ok)
    return dailyBody
  const dailyPoint = decodeAnchorDownloadPoint(dailyBody.value, ANCHOR_PACKAGE_NAME)
  if (!dailyPoint.ok)
    return dailyPoint

  const monthlyBody = await requestDownloadsBody(
    dependencies,
    downloadsRequest(dependencies, buildPointUrl({ kind: 'monthly', start: '', end: '', apiPeriod: 'last-month' }, ANCHOR_PACKAGE_NAME)),
    'anchor:last-month',
  )
  if (!monthlyBody.ok)
    return monthlyBody
  const monthlyPoint = decodeAnchorDownloadPoint(monthlyBody.value, ANCHOR_PACKAGE_NAME)
  if (!monthlyPoint.ok)
    return monthlyPoint

  const dailyPeriod: DownloadPeriod = {
    kind: 'daily',
    start: dailyPoint.value.start,
    end: dailyPoint.value.end,
    apiPeriod: dailyPoint.value.start,
  }
  const monthlyPeriod: DownloadPeriod = {
    kind: 'monthly',
    start: monthlyPoint.value.start,
    end: monthlyPoint.value.end,
    apiPeriod: `${monthlyPoint.value.start}:${monthlyPoint.value.end}`,
  }
  console.log(`[npm-downloads] anchored daily=${dailyPeriod.start}..${dailyPeriod.end} monthly=${monthlyPeriod.start}..${monthlyPeriod.end}`)
  return ok([dailyPeriod, monthlyPeriod])
}

// 构建非 scoped bulk：每批最多 100 个包、编码后完整 URL 最长 7000 字符。
// 最后一批只有一个包时按单包响应处理（decoder 依据 requestedPackageNames 长度选择 schema）。
export function createDownloadBatches(
  packageNames: readonly string[],
  period: DownloadPeriod,
  maximumBatchSize: number,
  maximumUrlLength: number,
): Result<readonly DownloadBatch[], RequestFailure> {
  const batches: DownloadBatch[] = []
  let current: string[] = []
  let currentUrl = ''

  const flush = () => {
    if (current.length === 0)
      return
    batches.push({
      kind: period.kind,
      period,
      requestedPackageNames: [...current],
      requestUrl: currentUrl,
    })
    current = []
    currentUrl = ''
  }

  for (const packageName of packageNames) {
    if (packageName.includes('/')) {
      return failure({
        kind: 'invariant',
        message: `scoped package "${packageName}" cannot join a downloads bulk request`,
      })
    }
    const candidateUrl = current.length === 0
      ? buildBulkUrl(period, [packageName])
      : `${currentUrl},${encodeURIComponent(packageName)}`
    if (current.length > 0 && (current.length >= maximumBatchSize || candidateUrl.length > maximumUrlLength)) {
      flush()
      currentUrl = buildBulkUrl(period, [packageName])
    }
    else {
      currentUrl = candidateUrl
    }
    current.push(packageName)
    if (currentUrl.length > maximumUrlLength) {
      return failure({
        kind: 'invariant',
        message: `downloads bulk url exceeds ${maximumUrlLength} characters at package "${packageName}"`,
      })
    }
  }
  flush()

  return ok(batches)
}

function downloadBatchTaskKey(batch: DownloadBatch): string {
  if (batch.requestedPackageNames.length === 1)
    return `${batch.kind}:single:${batch.requestedPackageNames[0]}`
  return `${batch.kind}:bulk:${batch.requestedPackageNames.length}:${batch.requestedPackageNames[0]}..${batch.requestedPackageNames.at(-1)}`
}

export async function fetchDownloadBatch(
  dependencies: DownloadsClientDependencies,
  batch: DownloadBatch,
): Promise<Result<CompletedDownloadBatch, RequestFailure>> {
  const taskKey = downloadBatchTaskKey(batch)
  const body = await requestDownloadsBody(
    dependencies,
    downloadsRequest(dependencies, batch.requestUrl),
    taskKey,
  )
  if (!body.ok)
    return body

  let decoded: Result<readonly DownloadPoint[], RequestFailure>
  if (batch.requestedPackageNames.length === 1) {
    const only = batch.requestedPackageNames[0]
    if (typeof only !== 'string') {
      return failure({
        kind: 'invariant',
        message: 'download batch declares one package but carries no package name',
      })
    }
    const point = decodeDownloadPoint(body.value, only, batch.period)
    if (!point.ok)
      return point
    decoded = ok([point.value])
  }
  else {
    decoded = decodeDownloadBulkResponse(body.value, batch.requestedPackageNames, batch.period)
  }
  if (!decoded.ok)
    return decoded

  return ok({ batch, points: decoded.value })
}

function matchesPeriod(point: DownloadPoint, period: DownloadPeriod): boolean {
  return point.start === period.start && point.end === period.end
}

function isBatchComplete(batch: DownloadBatch, collected: Map<string, Map<string, DownloadPoint>>): boolean {
  for (const packageName of batch.requestedPackageNames) {
    const perKind = collected.get(packageName)
    if (typeof perKind !== 'object')
      return false
    const point = perKind.get(batch.kind)
    if (typeof point !== 'object')
      return false
    if (!matchesPeriod(point, batch.period))
      return false
  }
  return true
}

export async function fetchAllDownloads(
  dependencies: DownloadsClientDependencies,
  packageNames: readonly string[],
  dailyPeriod: DownloadPeriod,
  monthlyPeriod: DownloadPeriod,
): Promise<Result<readonly PackageDownloads[], RequestFailure>> {
  const uniqueNames = new Set(packageNames)
  if (uniqueNames.size !== packageNames.length) {
    return failure({
      kind: 'invariant',
      message: 'downloads package list contains duplicates',
    })
  }

  const plainNames: string[] = []
  const scopedNames: string[] = []
  for (const packageName of packageNames) {
    if (packageName.includes('/'))
      scopedNames.push(packageName)
    else
      plainNames.push(packageName)
  }

  const dailyBatches = createDownloadBatches(plainNames, dailyPeriod, DOWNLOAD_BATCH_MAX_SIZE, DOWNLOAD_BATCH_MAX_URL_LENGTH)
  if (!dailyBatches.ok)
    return dailyBatches
  const monthlyBatches = createDownloadBatches(plainNames, monthlyPeriod, DOWNLOAD_BATCH_MAX_SIZE, DOWNLOAD_BATCH_MAX_URL_LENGTH)
  if (!monthlyBatches.ok)
    return monthlyBatches

  const scopedBatches: DownloadBatch[] = []
  for (const period of [dailyPeriod, monthlyPeriod]) {
    for (const packageName of scopedNames) {
      scopedBatches.push({
        kind: period.kind,
        period,
        requestedPackageNames: [packageName],
        requestUrl: buildPointUrl(period, packageName),
      })
    }
  }

  const allBatches = [...dailyBatches.value, ...monthlyBatches.value, ...scopedBatches]
  console.log(`[npm-downloads] ${allBatches.length} batch request(s) planned: ${dailyBatches.value.length} daily bulk, ${monthlyBatches.value.length} monthly bulk, ${scopedNames.length * 2} scoped single`)

  // 断点续传：读取已完成的 working points；周期不匹配的丢弃（本轮重新请求）。
  const working = await dependencies.store.readWorkingDownloadPoints(dependencies.runId)
  if (!working.ok)
    return working
  const collected = new Map<string, Map<string, DownloadPoint>>()
  const savedPairs = new Set<string>()
  for (const point of working.value) {
    const period = point.start === dailyPeriod.start && point.end === dailyPeriod.end ? dailyPeriod : monthlyPeriod
    if (!matchesPeriod(point, period))
      continue
    let perKind = collected.get(point.packageName)
    if (typeof perKind !== 'object') {
      perKind = new Map()
      collected.set(point.packageName, perKind)
    }
    perKind.set(period.kind, point)
    savedPairs.add(`${period.kind}:${point.packageName}`)
  }

  const pendingBatches = allBatches.filter(batch => !isBatchComplete(batch, collected))
  console.log(`[npm-downloads] ${pendingBatches.length} batch request(s) pending after resume seeding`)

  const failures: { taskKey: string, failure: RequestFailure }[] = []
  let completedBatches = 0

  const savePair = async (point: DownloadPoint, period: DownloadPeriod): Promise<Result<boolean, RequestFailure>> => {
    const pairKey = `${period.kind}:${point.packageName}`
    if (savedPairs.has(pairKey))
      return ok(true)
    let perKind = collected.get(point.packageName)
    if (typeof perKind !== 'object') {
      perKind = new Map()
      collected.set(point.packageName, perKind)
    }
    perKind.set(period.kind, point)
    const daily = perKind.get('daily')
    const monthly = perKind.get('monthly')
    if (typeof daily !== 'object' || typeof monthly !== 'object')
      return ok(true)
    savedPairs.add(pairKey)
    const saved = await dependencies.store.saveDownloads(dependencies.runId, [{
      packageName: point.packageName,
      daily,
      monthly,
    }])
    if (!saved.ok)
      return failure(saved.error)
    return ok(true)
  }

  await Promise.all(pendingBatches.map(async (batch) => {
    const result = await fetchDownloadBatch(dependencies, batch)
    if (!result.ok) {
      failures.push({ taskKey: downloadBatchTaskKey(batch), failure: result.error })
      return
    }
    for (const point of result.value.points) {
      const saved = await savePair(point, batch.period)
      if (!saved.ok) {
        failures.push({ taskKey: downloadBatchTaskKey(batch), failure: saved.error })
        return
      }
    }
    completedBatches += 1
    if (completedBatches % 25 === 0)
      console.log(`[npm-downloads] ${completedBatches}/${pendingBatches.length} batches completed`)
  }))

  if (failures.length > 0) {
    failures.sort((left, right) => left.taskKey.localeCompare(right.taskKey))
    const first = failures.at(0)
    if (typeof first !== 'object') {
      return failure({
        kind: 'invariant',
        message: 'downloads failure list is empty despite reported failures',
      })
    }
    console.error(`[npm-downloads] ${failures.length} batch request(s) failed; first failure at "${first.taskKey}"`)
    return failure(first.failure)
  }

  const records: PackageDownloads[] = []
  for (const packageName of packageNames) {
    const perKind = collected.get(packageName)
    const daily = perKind?.get('daily')
    const monthly = perKind?.get('monthly')
    if (typeof daily !== 'object' || typeof monthly !== 'object') {
      return failure({
        kind: 'invariant',
        message: `downloads for "${packageName}" are incomplete after all batches completed`,
      })
    }
    if (!matchesPeriod(daily, dailyPeriod) || !matchesPeriod(monthly, monthlyPeriod)) {
      return failure({
        kind: 'invariant',
        message: `downloads for "${packageName}" do not match the anchored periods`,
      })
    }
    records.push({ packageName, daily, monthly })
  }

  console.log(`[npm-downloads] all ${records.length} package(s) have daily and monthly points`)
  return ok(records)
}

export function createDownloadsClient(dependencies: DownloadsClientDependencies) {
  return {
    resolveDownloadPeriods: () => resolveDownloadPeriods(dependencies),
    createDownloadBatches,
    fetchDownloadBatch: (batch: DownloadBatch) => fetchDownloadBatch(dependencies, batch),
    fetchAllDownloads: (
      packageNames: readonly string[],
      dailyPeriod: DownloadPeriod,
      monthlyPeriod: DownloadPeriod,
    ) => fetchAllDownloads(dependencies, packageNames, dailyPeriod, monthlyPeriod),
  }
}
