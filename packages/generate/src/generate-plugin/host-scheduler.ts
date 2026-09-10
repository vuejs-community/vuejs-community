// Host 调度：每个 API Host 独立的并发、速率、重试、暂停与熔断。
// 所有重试都重新提交给相同 Host Scheduler，确保重试同样受限速控制。

import type { HostPolicy, HttpRequest, HttpSuccess, RequestFailure, Result } from './contracts'
import PQueue from 'p-queue'
import {
  failure,

  ok,

} from './contracts'
import { sendOnce } from './http-client'
import { sleep } from './utils'

export interface ScheduledSuccess {
  response: HttpSuccess
  attempts: number
}

export interface ScheduledFailure {
  failure: RequestFailure
  attempts: number
}

export interface HostScheduler {
  readonly policy: HostPolicy
  execute: (request: HttpRequest) => Promise<Result<HttpSuccess, RequestFailure>>
}

export function createHostScheduler(policy: HostPolicy): HostScheduler {
  const queue = new PQueue({
    concurrency: policy.concurrency,
    interval: policy.intervalMs,
    intervalCap: policy.intervalCap,
  })
  let consecutiveFailures = 0
  let breakerOpenUntil = 0
  let rateLimitRemaining = Number.POSITIVE_INFINITY
  let rateLimitResetAtMs = 0

  return {
    policy,
    async execute(request: HttpRequest): Promise<Result<HttpSuccess, RequestFailure>> {
      const beforeBreaker = Date.now()
      if (beforeBreaker < breakerOpenUntil)
        await sleep(breakerOpenUntil - beforeBreaker)
      if (rateLimitRemaining === 0 && Date.now() < rateLimitResetAtMs + 5000)
        await sleep(rateLimitResetAtMs + 5000 - Date.now())

      const queued = await queue.add(() => sendOnce(request))
      if (!queued) {
        return failure({
          kind: 'invariant',
          message: `host scheduler "${request.host}" returned no queued result`,
        })
      }

      if (queued.ok) {
        consecutiveFailures = 0
        if (queued.value.metadata.rateLimitRemaining.state === 'present') {
          rateLimitRemaining = queued.value.metadata.rateLimitRemaining.value
          const resetAt = queued.value.metadata.rateLimitResetAt
          if (resetAt.state === 'present')
            rateLimitResetAtMs = resetAt.value
        }
        return queued
      }

      consecutiveFailures += 1
      if (consecutiveFailures >= policy.circuitBreakerThreshold) {
        breakerOpenUntil = Date.now() + policy.circuitBreakerPauseMs
        consecutiveFailures = 0
      }
      return queued
    },
  }
}

const RETRY_BACKOFF_MS: readonly number[] = [1000, 2000, 4000, 8000, 16000, 30000, 60000]

function jitteredBackoff(attempt: number): number {
  const index = Math.min(attempt - 1, RETRY_BACKOFF_MS.length - 1)
  const base = RETRY_BACKOFF_MS[index] ?? RETRY_BACKOFF_MS[RETRY_BACKOFF_MS.length - 1] ?? 60000
  return Math.round(base * (0.5 + Math.random()))
}

export function calculateRetryDelay(
  failureInfo: RequestFailure,
  attempt: number,
  nowEpochMs: number,
): Result<number, RequestFailure> {
  if (failureInfo.kind === 'network' || failureInfo.kind === 'timeout')
    return ok(jitteredBackoff(attempt))
  if (failureInfo.kind !== 'http')
    return failure(failureInfo)

  const retryableStatus = failureInfo.status === 408
    || failureInfo.status === 425
    || failureInfo.status === 429
    || (failureInfo.status >= 500 && failureInfo.status <= 599)
  const rateLimited = failureInfo.status === 403
    && failureInfo.rateLimitRemaining.state === 'present'
    && failureInfo.rateLimitRemaining.value === 0
  if (!retryableStatus && !rateLimited)
    return failure(failureInfo)

  if (failureInfo.retryAfterMs.state === 'present')
    return ok(failureInfo.retryAfterMs.value)
  if (failureInfo.rateLimitResetAt.state === 'present' && (rateLimited || failureInfo.status === 429))
    return ok(Math.max(0, failureInfo.rateLimitResetAt.value + 5000 - nowEpochMs))
  return ok(jitteredBackoff(attempt))
}

export async function executeScheduled(
  request: HttpRequest,
  scheduler: HostScheduler,
): Promise<Result<ScheduledSuccess, ScheduledFailure>> {
  let lastFailure: RequestFailure = { kind: 'invariant', message: 'retry loop did not execute' }
  for (let attempt = 1; attempt <= scheduler.policy.maxAttemptsPerRun; attempt++) {
    const result = await scheduler.execute(request)
    if (result.ok)
      return ok({ response: result.value, attempts: attempt })
    lastFailure = result.error
    const delay = calculateRetryDelay(result.error, attempt, Date.now())
    if (!delay.ok)
      return failure({ failure: result.error, attempts: attempt })
    await sleep(delay.value)
  }
  return failure({ failure: lastFailure, attempts: scheduler.policy.maxAttemptsPerRun })
}
