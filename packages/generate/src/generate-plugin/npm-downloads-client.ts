// 阶段三：每日全量 Downloads。
// 先用 anchor 包锚定统计周期，非 scoped 包走 bulk（<=100 且 URL <=7000 字符），
// scoped 包逐个请求；decoder 校验请求与响应集合完全一致。

import type { CompletedDownloadBatch, DownloadBatch, DownloadPeriod, DownloadPoint, HttpRequest, PackageDownloads, RequestFailure, Result } from './contracts'
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
): Promise<Result<string, RequestFailure>> {
  const scheduled = await executeScheduled(request, dependencies.scheduler)
  if (!scheduled.ok)
    return failure(scheduled.error.failure)
  if (scheduled.value.response.kind !== 'body') {
    return failure({
      kind: 'invariant',
      message: `npm downloads endpoint "${request.url}" returned an unexpected not-modified response`,
    })
  }
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
  )
  if (!dailyBody.ok)
    return dailyBody
  const dailyPoint = decodeAnchorDownloadPoint(dailyBody.value, ANCHOR_PACKAGE_NAME)
  if (!dailyPoint.ok)
    return dailyPoint

  const monthlyBody = await requestDownloadsBody(
    dependencies,
    downloadsRequest(dependencies, buildPointUrl({ kind: 'monthly', start: '', end: '', apiPeriod: 'last-month' }, ANCHOR_PACKAGE_NAME)),
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

export async function fetchDownloadBatch(
  dependencies: DownloadsClientDependencies,
  batch: DownloadBatch,
): Promise<Result<CompletedDownloadBatch, RequestFailure>> {
  const body = await requestDownloadsBody(dependencies, downloadsRequest(dependencies, batch.requestUrl))
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

  const collected = new Map<string, Map<string, DownloadPoint>>()
  const failures: { requestUrl: string, failure: RequestFailure }[] = []
  let completedBatches = 0

  await Promise.all(allBatches.map(async (batch) => {
    const result = await fetchDownloadBatch(dependencies, batch)
    if (!result.ok) {
      failures.push({ requestUrl: batch.requestUrl, failure: result.error })
      return
    }
    for (const point of result.value.points) {
      let perKind = collected.get(point.packageName)
      if (typeof perKind !== 'object') {
        perKind = new Map()
        collected.set(point.packageName, perKind)
      }
      perKind.set(batch.kind, point)
    }
    completedBatches += 1
    if (completedBatches % 25 === 0)
      console.log(`[npm-downloads] ${completedBatches}/${allBatches.length} batches completed`)
  }))

  if (failures.length > 0) {
    failures.sort((left, right) => left.requestUrl.localeCompare(right.requestUrl))
    const first = failures.at(0)
    if (typeof first !== 'object') {
      return failure({
        kind: 'invariant',
        message: 'downloads failure list is empty despite reported failures',
      })
    }
    console.error(`[npm-downloads] ${failures.length} batch request(s) failed; first failure at "${first.requestUrl}"`)
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
