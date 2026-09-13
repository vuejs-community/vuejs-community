// HTTP 边界：只发送一次请求并返回结构化结果，不负责重试。
// 所有响应头统一转换为显式 Presence 判别联合。

import type { HttpHeader, HttpRequest, HttpSuccess, Presence, RequestFailure, ResponseMetadata, Result } from './contracts'
import {
  absent,
  failure,

  ok,

  present,

} from './contracts'

function stringHeader(headers: Headers, name: string): Presence<string> {
  const raw = headers.get(name)
  if (typeof raw !== 'string' || raw.length === 0)
    return absent()
  return present(raw)
}

function secondsHeader(headers: Headers, name: string): Presence<number> {
  const raw = headers.get(name)
  if (typeof raw !== 'string')
    return absent()
  const seconds = Number(raw)
  if (Number.isSafeInteger(seconds) && seconds >= 0)
    return present(seconds * 1000)
  const httpDate = Date.parse(raw)
  if (Number.isFinite(httpDate))
    return present(Math.max(0, httpDate - Date.now()))
  return absent()
}

function numberHeader(headers: Headers, name: string): Presence<number> {
  const raw = headers.get(name)
  if (typeof raw !== 'string')
    return absent()
  const parsed = Number(raw)
  if (Number.isSafeInteger(parsed) && parsed >= 0)
    return present(parsed)
  return absent()
}

function readResponseMetadata(response: Response): ResponseMetadata {
  const resetAtSeconds = numberHeader(response.headers, 'x-ratelimit-reset')
  return {
    status: response.status,
    etag: stringHeader(response.headers, 'etag'),
    lastModified: stringHeader(response.headers, 'last-modified'),
    retryAfterMs: secondsHeader(response.headers, 'retry-after'),
    rateLimitLimit: numberHeader(response.headers, 'x-ratelimit-limit'),
    rateLimitRemaining: numberHeader(response.headers, 'x-ratelimit-remaining'),
    rateLimitUsed: numberHeader(response.headers, 'x-ratelimit-used'),
    rateLimitResetAt: resetAtSeconds.state === 'present'
      ? present(resetAtSeconds.value * 1000)
      : absent(),
  }
}

function httpFailure(status: number, body: string, metadata: ResponseMetadata): RequestFailure {
  return {
    kind: 'http',
    status,
    body: body.slice(0, 2000),
    retryAfterMs: metadata.retryAfterMs,
    rateLimitRemaining: metadata.rateLimitRemaining,
    rateLimitResetAt: metadata.rateLimitResetAt,
  }
}

function transportFailure(error: Error, timeoutMs: number): RequestFailure {
  if (error.name === 'TimeoutError' || error.name === 'AbortError')
    return { kind: 'timeout', timeoutMs }
  return { kind: 'network', message: error.message }
}

function buildHeaderInit(headers: readonly HttpHeader[]): Record<string, string> {
  const headerInit: Record<string, string> = {}
  for (const header of headers)
    headerInit[header.name] = header.value
  return headerInit
}

export async function sendOnce(request: HttpRequest): Promise<Result<HttpSuccess, RequestFailure>> {
  try {
    const response = await fetch(request.url, {
      method: request.method,
      headers: buildHeaderInit(request.headers),
      signal: AbortSignal.timeout(request.timeoutMs),
      redirect: 'follow',
    })
    const metadata = readResponseMetadata(response)
    if (response.status === 304)
      return ok({ kind: 'not-modified', metadata })
    if (response.status >= 200 && response.status < 300) {
      const body = await response.text()
      return ok({ kind: 'body', body, metadata })
    }
    const body = await response.text()
    return failure(httpFailure(response.status, body, metadata))
  }
  catch (error) {
    if (error instanceof Error)
      return failure(transportFailure(error, request.timeoutMs))
    return failure({ kind: 'network', message: String(error) })
  }
}
