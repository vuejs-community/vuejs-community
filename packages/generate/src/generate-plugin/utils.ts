// 通用工具：睡眠、哈希与响应哈希校验。

import { createHash } from 'node:crypto'

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function sha256Hex(input: string): string {
  return createHash('sha256').update(input).digest('hex')
}

export function isValidResponseHash(value: string): boolean {
  return /^[0-9a-f]{64}$/.test(value)
}

export function hasNodeErrorCode(error: Error, code: string): boolean {
  return 'code' in error && error.code === code
}
