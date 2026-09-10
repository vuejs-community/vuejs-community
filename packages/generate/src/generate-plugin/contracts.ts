// 领域契约：所有规范化类型与 Result 类型。业务层不允许以特殊值表达缺失、失败或尚未执行。

export type Result<T, E>
  = | { ok: true, value: T }
    | { ok: false, error: E }

export type Presence<T>
  = | { state: 'present', value: T }
    | { state: 'absent' }

export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value }
}

export function failure<E>(error: E): Result<never, E> {
  return { ok: false, error }
}

export function present<T>(value: T): Presence<T> {
  return { state: 'present', value }
}

export function absent<T>(): Presence<T> {
  return { state: 'absent' }
}

// ---------------------------------------------------------------------------
// HTTP 契约
// ---------------------------------------------------------------------------

export type ApiHost = 'replication' | 'npm-registry' | 'npm-downloads' | 'github'

export type RequestFailure
  = | { kind: 'network', message: string }
    | { kind: 'timeout', timeoutMs: number }
    | {
      kind: 'http'
      status: number
      body: string
      retryAfterMs: Presence<number>
      rateLimitRemaining: Presence<number>
      rateLimitResetAt: Presence<number>
    }
    | { kind: 'schema', issues: readonly string[] }
    | { kind: 'invariant', message: string }
    | { kind: 'storage', operation: string, message: string }
    | { kind: 'publish', operation: string, message: string }

export interface ResponseMetadata {
  status: number
  etag: Presence<string>
  lastModified: Presence<string>
  retryAfterMs: Presence<number>
  rateLimitLimit: Presence<number>
  rateLimitRemaining: Presence<number>
  rateLimitUsed: Presence<number>
  rateLimitResetAt: Presence<number>
}

export type HttpSuccess
  = | {
    kind: 'body'
    body: string
    metadata: ResponseMetadata
  }
  | {
    kind: 'not-modified'
    metadata: ResponseMetadata
  }

export interface HttpHeader {
  name: string
  value: string
}

export interface HttpRequest {
  host: ApiHost
  method: 'GET'
  url: string
  headers: readonly HttpHeader[]
  timeoutMs: number
}

export interface HostPolicy {
  host: ApiHost
  concurrency: number
  intervalMs: number
  intervalCap: number
  requestTimeoutMs: number
  maxAttemptsPerRun: number
  circuitBreakerThreshold: number
  circuitBreakerPauseMs: number
}

// ---------------------------------------------------------------------------
// Plugin 定义
// ---------------------------------------------------------------------------

export type PluginType
  = | 'vite-plugin'
    | 'rollup-plugin'
    | 'rolldown-plugin'
    | 'unplugin'

export interface PluginDefinition {
  directory: 'vite' | 'rollup' | 'rolldown' | 'unplugin'
  packageNamePrefix: string
  type: PluginType
  icon: string
}

// ---------------------------------------------------------------------------
// Replication
// ---------------------------------------------------------------------------

export interface ReplicationInfo {
  databaseName: string
  engine: string
  documentCount: number
  updateSequence: number
}

export interface ReplicationIndexRow {
  packageName: string
  key: string
  revision: string
}

export interface ReplicationPage {
  totalRows: number
  offset: number
  rows: readonly ReplicationIndexRow[]
}

export interface ReplicationChange {
  sequence: number
  packageName: string
  revision: string
  deleted: boolean
}

export interface ReplicationChangesPage {
  lastSequence: number
  changes: readonly ReplicationChange[]
}

export interface PackageTarget {
  packageName: string
  revision: string
  definition: PluginDefinition
}

export interface ReplicationSnapshot {
  startSequence: number
  endSequence: number
  packages: readonly PackageTarget[]
}

// ---------------------------------------------------------------------------
// Package metadata
// ---------------------------------------------------------------------------

export type NpmRepository
  = | {
    kind: 'string'
    value: string
  }
  | {
    kind: 'object'
    url: string
    type: Presence<string>
    directory: Presence<string>
  }

export interface PackageMetadata {
  name: string
  version: string
  description: Presence<string>
  keywords: Presence<readonly string[]>
  repository: Presence<NpmRepository>
  homepage: Presence<string>
  bugsUrl: Presence<string>
  deprecated: Presence<string>
}

export interface PackageMetadataCache {
  packageName: string
  requestUrl: string
  lastModified: Presence<string>
  responseHash: string
  metadata: PackageMetadata
}

export type PackageMetadataRecord
  = | {
    validation: 'response-200'
    target: PackageTarget
    metadata: PackageMetadata
    cacheValidator: Presence<string>
  }
  | {
    validation: 'response-304'
    target: PackageTarget
    metadata: PackageMetadata
    cacheValidator: string
  }

export interface PackageMetadataOutcome {
  record: PackageMetadataRecord
  cache: PackageMetadataCache
  attempts: number
}

// ---------------------------------------------------------------------------
// Downloads
// ---------------------------------------------------------------------------

export type DownloadMetricKind = 'daily' | 'monthly'

export interface DownloadPeriod {
  kind: DownloadMetricKind
  start: string
  end: string
  apiPeriod: string
}

export interface DownloadPoint {
  packageName: string
  downloads: number
  start: string
  end: string
}

export interface PackageDownloads {
  packageName: string
  daily: DownloadPoint
  monthly: DownloadPoint
}

export interface DownloadBatch {
  kind: DownloadMetricKind
  period: DownloadPeriod
  requestedPackageNames: readonly string[]
  requestUrl: string
}

export interface CompletedDownloadBatch {
  batch: DownloadBatch
  points: readonly DownloadPoint[]
}

// ---------------------------------------------------------------------------
// GitHub
// ---------------------------------------------------------------------------

export interface GitHubRepositoryTarget {
  fullName: string
  owner: string
  repository: string
}

export type PackageGitHubTarget
  = | {
    kind: 'repository'
    packageName: string
    target: GitHubRepositoryTarget
  }
  | {
    kind: 'absent'
    packageName: string
  }

export interface GitHubRepositoryData {
  fullName: string
  htmlUrl: string
  stars: number
  archived: boolean
  disabled: boolean
}

export interface GitHubRepositoryCache {
  fullName: string
  etag: string
  responseHash: string
  data: GitHubRepositoryData
}

export interface GitHubRepositoryRecord {
  data: GitHubRepositoryData
  etag: string
  validation: 'response-200' | 'response-304'
}

export interface GitHubRepositoryOutcome {
  record: GitHubRepositoryRecord
  nextCache: Presence<GitHubRepositoryCache>
  attempts: number
}

export type PackageGitHubData
  = | {
    kind: 'repository'
    packageName: string
    repository: GitHubRepositoryRecord
  }
  | {
    kind: 'absent'
    packageName: string
  }

// ---------------------------------------------------------------------------
// 完整快照
// ---------------------------------------------------------------------------

export interface PluginSnapshotEntry {
  target: PackageTarget
  packageMetadata: PackageMetadataRecord
  downloads: PackageDownloads
  github: PackageGitHubData
}

export interface CompletePluginSnapshot {
  snapshotId: string
  startedAt: string
  completedAt: string
  replicationStartSequence: number
  replicationEndSequence: number
  dailyPeriod: DownloadPeriod
  monthlyPeriod: DownloadPeriod
  entries: readonly PluginSnapshotEntry[]
}

export interface PublishedSnapshot {
  snapshotId: string
  publishedPath: string
  publishedAt: string
}

// ---------------------------------------------------------------------------
// 跨 Run 缓存存储接口（JSON 文件实现）
// 缓存文件保存 metadata Last-Modified 与 GitHub ETag 校验器，
// 使每日全量检查的多数响应退化为 304；run 内任务状态不持久化。
// ---------------------------------------------------------------------------

export interface CacheStore {
  readMetadataCaches: () => Result<readonly PackageMetadataCache[], RequestFailure>
  readGitHubCaches: () => Result<readonly GitHubRepositoryCache[], RequestFailure>
  saveMetadataCache: (cache: PackageMetadataCache) => Result<boolean, RequestFailure>
  saveGitHubCache: (cache: GitHubRepositoryCache) => Result<boolean, RequestFailure>
  flush: () => Result<boolean, RequestFailure>
  close: () => void
}
