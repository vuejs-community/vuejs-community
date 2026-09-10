// 时钟：本轮同步的唯一时间上下文，各阶段不允许重复读取当前日期。

export interface PipelineClock {
  nowIso: () => string
}

export function createSystemClock(): PipelineClock {
  return {
    nowIso: () => new Date().toISOString(),
  }
}

export function isValidIsoUtcTimestamp(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/.test(value))
    return false
  return Number.isFinite(Date.parse(value))
}
