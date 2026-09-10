// 跨 Run 缓存存储：两个 JSON 文件分别保存 metadata 校验器与 GitHub 校验器。
// 缓存是"跨天"状态而非 run 内状态：有了它，每日全量检查的多数响应退化为 304，
// GitHub 认证下 304 不消耗 rate limit 配额。run 内任务状态不持久化，崩溃即重跑。
// 写入策略：内存 Map 即时更新，累计 FLUSH_THRESHOLD 条或调用 flush() 时原子落盘。

import type { ZodType } from 'zod'
import type { CacheStore, GitHubRepositoryCache, PackageMetadataCache, RequestFailure, Result } from './contracts'
import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { z } from 'zod'
import {

  failure,

  ok,

} from './contracts'
import { githubRepositoryCacheSchema, packageMetadataCacheSchema } from './schemas'
import { hasNodeErrorCode } from './utils'

export interface JsonCacheStoreOptions {
  metadataCachePath: string
  githubCachePath: string
}

const FLUSH_THRESHOLD = 500

const metadataCacheFileSchema: ZodType<Record<string, PackageMetadataCache>> = z.record(z.string(), packageMetadataCacheSchema)
const githubCacheFileSchema: ZodType<Record<string, GitHubRepositoryCache>> = z.record(z.string(), githubRepositoryCacheSchema)

function cacheFailure(operation: string, message: string): RequestFailure {
  return { kind: 'storage', operation, message }
}

function errorMessage(error: Error): string {
  return error.message
}

export function openJsonCacheStore(options: JsonCacheStoreOptions): Result<CacheStore, RequestFailure> {
  function readCacheFile<T>(path: string, schema: ZodType<Record<string, T>>, operation: string): Result<Map<string, T>, RequestFailure> {
    let raw: string
    try {
      raw = readFileSync(path, 'utf8')
    }
    catch (error) {
      if (error instanceof Error && hasNodeErrorCode(error, 'ENOENT'))
        return ok(new Map())
      if (error instanceof Error)
        return failure(cacheFailure(operation, errorMessage(error)))
      return failure(cacheFailure(operation, 'cache file read failed'))
    }
    let parsedValue: object
    try {
      parsedValue = JSON.parse(raw)
    }
    catch (error) {
      if (error instanceof Error)
        return failure(cacheFailure(operation, `cache file is not parseable: ${errorMessage(error)}`))
      return failure(cacheFailure(operation, 'cache file is not parseable'))
    }
    const validated = schema.safeParse(parsedValue)
    if (!validated.success) {
      return failure(cacheFailure(operation, `cache file failed schema validation: ${validated.error.issues[0]?.message ?? ''}`))
    }
    return ok(new Map(Object.entries(validated.data)))
  }

  const metadataCaches = readCacheFile(options.metadataCachePath, metadataCacheFileSchema, 'read-metadata-cache-file')
  if (!metadataCaches.ok)
    return metadataCaches
  const githubCaches = readCacheFile(options.githubCachePath, githubCacheFileSchema, 'read-github-cache-file')
  if (!githubCaches.ok)
    return githubCaches
  const metadataEntries = metadataCaches.value
  const githubEntries = githubCaches.value

  let metadataDirty = false
  let githubDirty = false

  function writeCacheFile(path: string, entries: Map<string, PackageMetadataCache | GitHubRepositoryCache>, operation: string): Result<boolean, RequestFailure> {
    try {
      mkdirSync(dirname(path), { recursive: true })
      const temporaryPath = `${path}.tmp`
      writeFileSync(temporaryPath, JSON.stringify(Object.fromEntries(entries)))
      renameSync(temporaryPath, path)
      return ok(true)
    }
    catch (error) {
      if (error instanceof Error)
        return failure(cacheFailure(operation, errorMessage(error)))
      return failure(cacheFailure(operation, 'cache file write failed'))
    }
  }

  function flush(): Result<boolean, RequestFailure> {
    if (metadataDirty) {
      const written = writeCacheFile(options.metadataCachePath, metadataEntries, 'flush-metadata-cache')
      if (!written.ok)
        return written
      metadataDirty = false
    }
    if (githubDirty) {
      const written = writeCacheFile(options.githubCachePath, githubEntries, 'flush-github-cache')
      if (!written.ok)
        return written
      githubDirty = false
    }
    return ok(true)
  }

  const store: CacheStore = {
    readMetadataCaches: () => ok([...metadataEntries.values()]),
    readGitHubCaches: () => ok([...githubEntries.values()]),

    saveMetadataCache: (cache: PackageMetadataCache): Result<boolean, RequestFailure> => {
      metadataEntries.set(cache.packageName, cache)
      metadataDirty = true
      if (metadataEntries.size % FLUSH_THRESHOLD === 0) {
        const written = flush()
        if (!written.ok)
          return written
      }
      return ok(true)
    },

    saveGitHubCache: (cache: GitHubRepositoryCache): Result<boolean, RequestFailure> => {
      githubEntries.set(cache.fullName.toLowerCase(), cache)
      githubDirty = true
      if (githubEntries.size % FLUSH_THRESHOLD === 0) {
        const written = flush()
        if (!written.ok)
          return written
      }
      return ok(true)
    },

    flush,
    close: () => {},
  }

  return ok(store)
}
