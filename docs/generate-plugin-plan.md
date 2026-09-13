# Plugin 数据每日全量生成方案

## 1. 目标与边界

本文定义一个每天执行一次的严格全量同步流程：

1. 使用 npm Replication API 按指定包名前缀全量扫描包名。
2. 对扫描得到的每个包全量检查最新 package metadata。
3. 对全部有效包获取同一统计周期的日下载量和月下载量。
4. 对全部存在 GitHub 仓库链接的包检查仓库 Stars；相同仓库只请求一次。
5. 只有当本次所有必要数据完整时，才发布一个新的完整快照。

公网 API 不存在“绝对不限流、永不失败”的承诺。因此脚本的可实现保证定义为：

- 每个 API Host 使用独立限速器，不主动触发已知限流。
- 429、服务端错误、网络错误和超时按协议等待并重试。
- 所有任务有持久化状态，进程退出后可以继续同一轮同步。
- 不用 `0`、空字符串、旧统计值或跳过失败记录作为兜底。
- 任何必要数据失败或缺失时，本次快照不发布。
- 已发布快照永远来自一次完整成功的同步。

本文中的“全量”指每天对完整包集合执行检查。Package metadata 和 GitHub 请求允许使用 HTTP 条件请求：

- `200 OK` 表示服务端返回了新实体。
- `304 Not Modified` 表示服务端确认缓存实体仍然有效。
- 只有本地存在与请求校验器严格匹配的缓存实体时，304 才算成功。
- 网络错误时禁止使用缓存伪装成本次检查成功。

## 2. 已验证的 API 行为

以下响应形状已于 2026-09-09 通过官方端点做只读验证。

### 2.1 Replication 索引

请求：

```text
GET https://replicate.npmjs.com/registry/_all_docs
```

响应：

```json
{
  "total_rows": 4374853,
  "offset": 4167473,
  "rows": [
    {
      "id": "vite-plugin-vue",
      "key": "vite-plugin-vue",
      "value": {
        "rev": "8-0c3c957c9f21796a0f06bdf6e47d5fcb"
      }
    }
  ]
}
```

`total_rows` 是整个 Registry 的总包数，不是当前前缀的命中数。分页必须基于最后一个 `key`，不能使用全局 offset 推导前缀结果数量。

### 2.2 Replication 数据库状态

请求：

```text
GET https://replicate.npmjs.com/registry/
```

响应：

```json
{
  "db_name": "registry",
  "engine": "npm-replicate",
  "doc_count": 4374853,
  "update_seq": 129653228
}
```

### 2.3 Replication Changes

请求：

```text
GET https://replicate.npmjs.com/registry/_changes?since=<sequence>&limit=1000
```

响应：

```json
{
  "results": [
    {
      "seq": 129643257,
      "id": "@jsenv/core",
      "changes": [
        {
          "rev": "1167-15d9aff07d7f7f96d83a720fa95f7455"
        }
      ]
    }
  ],
  "last_seq": 129643259
}
```

删除记录会额外包含 `deleted: true`。解析后必须把字段归一化为必有的 `boolean`。

### 2.4 npm Package Metadata

请求：

```text
GET https://registry.npmjs.org/{encodeURIComponent(packageName)}/latest
```

实测确认：

- `name` 和 `version` 存在。
- `description`、`keywords`、`repository`、`homepage`、`bugs`、`deprecated` 可能完全缺失。
- `repository` 可能是字符串，也可能是 `{ url, type, directory }`，其中 `type` 和 `directory` 也可能缺失。
- scoped 包必须把 `/` 编码为 `%2F`。
- 响应带有 `Last-Modified` 时，发送 `If-Modified-Since` 可以得到 `304 Not Modified`。

npm 官方 metadata 说明：[Package metadata](https://github.com/npm/registry/blob/main/docs/responses/package-metadata.md)。

### 2.5 npm Downloads

非 scoped bulk 响应是按包名索引的对象：

```json
{
  "vite-plugin-vue-devtools": {
    "downloads": 3972962,
    "package": "vite-plugin-vue-devtools",
    "start": "2026-08-10",
    "end": "2026-09-08"
  }
}
```

scoped 单包响应是单个对象：

```json
{
  "downloads": 0,
  "package": "@rollup/plugin-alias",
  "start": "2026-09-08",
  "end": "2026-09-08"
}
```

官方约束：

- bulk 单次最多 128 个包。
- scoped 包不支持 bulk。
- scoped 包路径中的 `/` 必须编码。

参考：[npm Downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md#bulk-queries)。

### 2.6 GitHub Repository

请求：

```text
GET https://api.github.com/repos/{owner}/{repository}
```

本流程只消费：

```json
{
  "full_name": "vuejs/devtools",
  "html_url": "https://github.com/vuejs/devtools",
  "stargazers_count": 2904,
  "archived": false,
  "disabled": false
}
```

响应头包含：

```text
etag
last-modified
x-ratelimit-limit
x-ratelimit-remaining
x-ratelimit-used
x-ratelimit-reset
retry-after
```

GitHub 未认证请求通常只有 60 次/小时，普通认证 Token 通常为 5000 次/小时。认证条件请求得到 304 时，不消耗主要 rate limit，但仍应控制请求速率以避免 secondary rate limit。

参考：

- [GitHub REST API rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)
- [GitHub conditional requests](https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api#use-conditional-requests)

## 3. 禁止事项

最终实现必须明确禁止：

- 用户指定的四种空值或顶层宽泛类型关键字。
- TypeScript 可选属性 `field?: Type`。
- 宽泛的 `object`、`{}` 或没有运行时校验的类型断言。
- 非空断言操作符。
- `catch` 后返回伪造值并继续执行。
- 请求失败后沿用旧 Downloads 或旧 Stars 并把当日快照标记为成功。
- 缺少 bulk 响应键时静默跳过。
- GitHub 请求失败时把 Stars 写为 `0`。
- npm Downloads 请求失败时把 Downloads 写为 `0`。
- 对 400、401、403、404、422 等所有 4xx 无差别重试。
- 重试绕过 Host 限速队列。
- 边请求边修改正式快照。

外部 JSON 中字段缺失是协议事实。传输层 schema 必须识别“字段存在”和“字段不存在”两种输入，并在解析边界转换为 `Presence<T>` 判别联合。业务层通过 `state` 分支穷尽处理，不以特殊值表达缺失、失败或尚未执行。

## 4. 建议的代码模块

入口脚本只负责装配和启动：

```text
generate-plugin-names.ts
```

业务代码拆分为：

```text
generate-plugin/
├── contracts.ts
├── schemas.ts
├── clock.ts
├── http-client.ts
├── host-scheduler.ts
├── replication-client.ts
├── npm-registry-client.ts
├── npm-downloads-client.ts
├── github-client.ts
├── repository-parser.ts
├── state-store.ts
├── snapshot-validator.ts
├── snapshot-publisher.ts
└── pipeline.ts
```

职责：

- `contracts.ts`：所有规范化领域类型和 Result 类型。
- `schemas.ts`：所有外部 JSON 的运行时 schema；推荐使用 Zod。
- `clock.ts`：创建本轮唯一时间上下文，不允许在各阶段重复读取当前日期。
- `http-client.ts`：只发送一次 HTTP 请求并返回结构化结果，不负责重试。
- `host-scheduler.ts`：每个 Host 的并发、速率、重试、暂停和熔断。
- `replication-client.ts`：前缀分页、sequence、changes 和包集合校验。
- `npm-registry-client.ts`：对所有包执行每日 metadata 条件请求。
- `npm-downloads-client.ts`：锚定统计周期、构建 bulk、单包 scoped 请求和批次完整性校验。
- `github-client.ts`：仓库去重、条件请求、rate-limit 感知和 Stars 校验。
- `repository-parser.ts`：从 npm metadata 中识别并规范化 GitHub 仓库。
- `state-store.ts`：持久化 run、task、缓存实体和成功快照。
- `snapshot-validator.ts`：执行全局集合相等性与状态检查。
- `snapshot-publisher.ts`：生成 staging 快照并原子发布。
- `pipeline.ts`：严格按五个阶段编排。

## 5. 核心类型设计

### 5.1 Result 与失败类型

所有 API 边界返回 Result，不通过伪造业务值表达失败：

```ts
export type Result<T, E>
  = | { ok: true, value: T }
    | { ok: false, error: E }

export type Presence<T>
  = | { state: 'present', value: T }
    | { state: 'absent' }

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
```

响应头统一成显式判别联合：

```ts
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
```

HTTP 成功响应只有两种：

```ts
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
```

### 5.2 Plugin 定义

```ts
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
```

所有字段必填，不使用可选属性。

### 5.3 Replication 类型

```ts
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
```

### 5.4 Package Metadata 类型

只建模最终生成和 GitHub 识别真正消费的字段。响应中的其他字段由 schema 明确忽略，不使用宽泛索引签名承接。

```ts
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
```

对于实际缺失的 description、keywords、repository 等字段，schema 输出 `{ state: 'absent' }`。禁止输出空字符串或空数组来掩盖字段缺失。

### 5.5 Downloads 类型

```ts
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
  requestedPackageNames: readonly string[]
  requestUrl: string
}

export interface CompletedDownloadBatch {
  batch: DownloadBatch
  points: readonly DownloadPoint[]
}
```

Bulk JSON 不直接暴露为 `Record<string, DownloadPoint>` 进入业务层。Decoder 必须先校验响应 key 集合与请求集合完全一致，再输出 `CompletedDownloadBatch`。

### 5.6 GitHub 类型

```ts
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
```

GitHub URL 缺失是合法的 `absent`。存在可识别的 GitHub URL 后，GitHub API 未成功则整个快照失败，不能转成 `absent`。

### 5.7 完整快照类型

```ts
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
```

这个类型没有 partial、pending 或 retry 分支。只有通过最终校验的数据才能构造 `CompletePluginSnapshot`。

## 6. Schema 设计

外部 JSON 必须先经过运行时 schema，不能直接做 TypeScript 类型断言。

推荐为以下响应分别建立 Zod schema：

```text
ReplicationInfoSchema
ReplicationPageSchema
ReplicationChangesPageSchema
PackageMetadataSchema
DownloadPointSchema
DownloadBulkResponseSchema
GitHubRepositorySchema
```

Schema 规则：

- 数字必须是 finite number；计数必须是非负整数。
- 日期必须匹配 `YYYY-MM-DD` 并通过实际日期校验。
- npm package name 必须与请求目标完全一致。
- GitHub `full_name` 必须与请求的 `owner/repository` 忽略大小写后一致。
- 外部允许缺失的 metadata 字段在 schema 输出阶段统一为 `{ state: 'absent' }`。
- `keywords` 存在时必须是字符串数组；错误元素不能被过滤后继续。
- repository 对象存在时必须包含非空 URL。
- schema 失败产生 `RequestFailure.kind === 'schema'`，并阻止快照发布。

Decoder 函数固定签名：

```ts
export function decodeReplicationInfo(body: string): Result<ReplicationInfo, RequestFailure>

export function decodeReplicationPage(body: string): Result<ReplicationPage, RequestFailure>

export function decodeReplicationChangesPage(body: string): Result<ReplicationChangesPage, RequestFailure>

export function decodePackageMetadata(
  body: string,
  expectedPackageName: string,
): Result<PackageMetadata, RequestFailure>

export function decodeDownloadPoint(
  body: string,
  expectedPackageName: string,
  expectedPeriod: DownloadPeriod,
): Result<DownloadPoint, RequestFailure>

export function decodeDownloadBulkResponse(
  body: string,
  expectedPackageNames: readonly string[],
  expectedPeriod: DownloadPeriod,
): Result<readonly DownloadPoint[], RequestFailure>

export function decodeGitHubRepository(
  body: string,
  expectedFullName: string,
): Result<GitHubRepositoryData, RequestFailure>
```

## 7. HTTP 与限流设计

### 7.1 请求类型

```ts
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

export type ApiHost
  = | 'replication'
    | 'npm-registry'
    | 'npm-downloads'
    | 'github'
```

使用 Header 数组而不是带宽泛 value 类型的对象。

### 7.2 Host 策略

```ts
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
```

建议初始值：

| Host | 并发 | intervalCap / interval | 超时 |
|---|---:|---:|---:|
| Replication | 1 | 2 / 1000ms | 30s |
| npm Registry | 3 | 5 / 1000ms | 30s |
| npm Downloads | 1 | 1 / 750ms | 30s |
| GitHub | 2 | 2 / 1000ms | 30s |

这些是客户端保守起点，不是服务端承诺。Host Scheduler 必须能够在 429 或 rate-limit 下降时动态暂停。

### 7.3 重试分类

可重试：

```text
网络连接失败
请求超时
HTTP 408
HTTP 425
HTTP 429
HTTP 500-599
GitHub 403 且 x-ratelimit-remaining=0
```

不可重试并立即失败：

```text
HTTP 400
HTTP 401
HTTP 403 且不是 rate limit
HTTP 404
HTTP 410
HTTP 422
Schema 校验失败
请求目标与响应实体不一致
```

404 的严格处理：

- Replication 快照中存在包，但 npm `/latest` 返回 404：本轮失败，重新读取 Replication changes 后重跑，不能跳过。
- metadata 存在 GitHub URL，但 GitHub 返回 404：本轮失败，不能把 Stars 写为 0。
- Downloads 单包最终返回缺失或 404：本轮失败。

退避顺序：

```text
1s → 2s → 4s → 8s → 16s → 30s → 60s
```

每次延迟乘以 0.5 到 1.5 的随机抖动。有 `Retry-After` 时以服务端值为准。GitHub `x-ratelimit-remaining=0` 时等待到 `x-ratelimit-reset + 5s`。

所有重试必须重新提交给相同 Host Scheduler，确保重试也受限速控制。

### 7.4 请求函数

```ts
export function sendOnce(
  request: HttpRequest,
): Promise<Result<HttpSuccess, RequestFailure>>

export function executeScheduled(
  request: HttpRequest,
  policy: HostPolicy,
): Promise<Result<HttpSuccess, RequestFailure>>

export function calculateRetryDelay(
  failure: RequestFailure,
  attempt: number,
  nowEpochMs: number,
): Result<number, RequestFailure>
```

`sendOnce` 不重试；`executeScheduled` 是唯一允许实施重试的位置。

## 8. 阶段一：Replication 全量扫描

### 8.1 前缀范围

每个定义请求：

```text
startkey=JSON.stringify(prefix)
endkey=JSON.stringify(prefix + "\uFFF0")
limit=1000
```

后续页面使用上一页最后一个 key 作为 startkey。因为 startkey 包含边界：

- 后续页请求 `PAGE_SIZE + 1`。
- 第一条等于上页 cursor 时才移除它。
- 第一条不等于 cursor 时不能盲目 skip，避免 cursor 恰好被删除后漏掉下一条。

### 8.2 扫描函数

```ts
export function fetchReplicationInfo(): Promise<Result<ReplicationInfo, RequestFailure>>

export function fetchReplicationPage(
  definition: PluginDefinition,
  cursor: Presence<string>,
): Promise<Result<ReplicationPage, RequestFailure>>

export function collectPrefixPackages(
  definition: PluginDefinition,
): Promise<Result<readonly PackageTarget[], RequestFailure>>

export function fetchChangesThrough(
  startSequence: number,
  endSequence: number,
): Promise<Result<readonly ReplicationChange[], RequestFailure>>

export function createReplicationSnapshot(
  definitions: readonly PluginDefinition[],
): Promise<Result<ReplicationSnapshot, RequestFailure>>
```

`createReplicationSnapshot` 算法：

1. 读取 `startSequence`。
2. 顺序扫描全部前缀。
3. 读取 `endSequence`。
4. 获取 `(startSequence, endSequence]` 内全部 changes。
5. 对新增和更新记录 upsert，对 deleted 记录删除。
6. 按 package name 去重。
7. 验证每个结果都满足对应前缀。
8. 排序后返回不可变 `ReplicationSnapshot`。

## 9. 阶段二：每日全量 Package Metadata

每日必须对阶段一的每个包发起检查。

请求 URL：

```text
https://registry.npmjs.org/{encodeURIComponent(packageName)}/latest
```

请求规则：

- 本地有上次成功实体且保存了 `Last-Modified`：发送 `If-Modified-Since`。
- 没有缓存实体或没有 validator：发送普通 GET，必须得到 200。
- 200：解析并保存新实体与新的 `Last-Modified`。
- 304：必须验证缓存 package name、缓存 hash 和请求目标一致，然后记录 `response-304`。
- 304 但缓存不存在：Invariant Failure。
- 其他状态按统一错误策略处理。

函数：

```ts
export function createPackageMetadataRequest(
  target: PackageTarget,
  cache: Presence<PackageMetadataCache>,
): HttpRequest

export function fetchPackageMetadata(
  target: PackageTarget,
  cache: Presence<PackageMetadataCache>,
): Promise<Result<PackageMetadataRecord, RequestFailure>>

export function fetchAllPackageMetadata(
  snapshot: ReplicationSnapshot,
  caches: readonly PackageMetadataCache[],
): Promise<Result<readonly PackageMetadataRecord[], RequestFailure>>
```

完整性条件：

```text
metadata package-name 集合 === replication package-name 集合
```

任何包失败都会使阶段失败。

## 10. 阶段三：每日全量 Downloads

### 10.1 先锚定统计周期

禁止在本地猜测 npm 的最新完整统计日。先用一个固定存在的 anchor 包向 npm 查询：

```text
GET https://api.npmjs.org/downloads/point/last-day/npm
GET https://api.npmjs.org/downloads/point/last-month/npm
```

从响应取得：

```text
daily.start
daily.end
monthly.start
monthly.end
```

然后把它们转换为本轮固定 period：

```text
daily apiPeriod   = daily.start
monthly apiPeriod = monthly.start + ":" + monthly.end
```

本轮后续所有包都使用显式日期，不再使用 `last-day` 和 `last-month`，避免任务跨 UTC 日期边界后出现周期不一致。

函数：

```ts
export function resolveDownloadPeriods(): Promise<
  Result<readonly [DownloadPeriod, DownloadPeriod], RequestFailure>
>
```

### 10.2 构建非 scoped bulk

约束同时满足：

- 每批最多 100 个包，低于官方 128 上限。
- 编码后的完整 URL 最长 7000 字符。
- 最后一批只有一个包时，按单包响应处理，不能套用 bulk schema。

```ts
export function createDownloadBatches(
  packageNames: readonly string[],
  period: DownloadPeriod,
  maximumBatchSize: number,
  maximumUrlLength: number,
): Result<readonly DownloadBatch[], RequestFailure>
```

### 10.3 Scoped 包

scoped 包单独请求，并编码 `/`：

```text
@rollup/plugin-alias
→ %40rollup%2Fplugin-alias
```

每天每个 scoped 包发送两次请求：daily 一次，monthly 一次。

### 10.4 批次完整性

```ts
export function fetchDownloadBatch(
  batch: DownloadBatch,
): Promise<Result<CompletedDownloadBatch, RequestFailure>>

export function fetchAllDownloads(
  packageNames: readonly string[],
  dailyPeriod: DownloadPeriod,
  monthlyPeriod: DownloadPeriod,
): Promise<Result<readonly PackageDownloads[], RequestFailure>>
```

Decoder 必须验证：

- 请求包名集合与响应包名集合完全相等。
- 响应对象内部的 `package` 与外层 key 相等。
- 所有 start/end 与本轮固定 period 相等。
- downloads 是非负整数。
- daily 和 monthly 最终都覆盖全部包。

如果 bulk 缺少 key，整个 batch 失败。允许把该 batch 二分后重新提交，以判断是 URL 长度、单个包还是临时服务端问题；二分是诊断与重试策略，不允许把缺失包删除。

## 11. 阶段四：每日全量 GitHub 条件检查

### 11.1 Repository 解析

支持：

```text
https://github.com/owner/repo
git+https://github.com/owner/repo.git
git://github.com/owner/repo.git
git@github.com:owner/repo.git
github:owner/repo
owner/repo
```

优先级：

1. `repository`
2. `homepage`
3. `bugsUrl`

```ts
export function extractGitHubTarget(
  metadata: PackageMetadata,
): Result<PackageGitHubTarget, RequestFailure>

export function collectPackageGitHubTargets(
  metadataRecords: readonly PackageMetadataRecord[],
): Result<readonly PackageGitHubTarget[], RequestFailure>

export function collectUniqueGitHubTargets(
  packageTargets: readonly PackageGitHubTarget[],
): Result<readonly GitHubRepositoryTarget[], RequestFailure>
```

没有 GitHub 链接返回 `kind: 'absent'`。字段明显声明为 GitHub 链接但格式无法解析时返回 invariant failure，不能按 absent 处理。

### 11.2 条件请求

请求头：

```text
Authorization: Bearer <token>
Accept: application/vnd.github+json
X-GitHub-Api-Version: 2022-11-28
If-None-Match: <etag>
```

`If-None-Match` 仅在存在完整缓存实体和 ETag 时发送。

```ts
export function createGitHubRequest(
  target: GitHubRepositoryTarget,
  cache: Presence<GitHubRepositoryCache>,
  token: string,
): Result<HttpRequest, RequestFailure>

export function fetchGitHubRepository(
  target: GitHubRepositoryTarget,
  cache: Presence<GitHubRepositoryCache>,
  token: string,
): Promise<Result<GitHubRepositoryRecord, RequestFailure>>

export function fetchAllGitHubRepositories(
  targets: readonly GitHubRepositoryTarget[],
  caches: readonly GitHubRepositoryCache[],
  token: string,
): Promise<Result<readonly GitHubRepositoryRecord[], RequestFailure>>

export function mapGitHubRecordsToPackages(
  packageTargets: readonly PackageGitHubTarget[],
  repositoryRecords: readonly GitHubRepositoryRecord[],
): Result<readonly PackageGitHubData[], RequestFailure>
```

规则：

- 200：解析实体，要求存在 ETag，然后更新缓存。
- 304：缓存必须存在、ETag 必须与请求值一致、hash 必须通过校验。
- 403/429：读取 Retry-After 和 rate-limit headers。
- `remaining=0`：暂停到 reset 后再请求。
- 404：存在 GitHub 链接却无法获取仓库，阶段失败。
- 相同 fullName 只请求一次，再映射回所有 package。

完整性条件：

```text
唯一 GitHub repository 集合 === 成功 GitHub record 集合
```

## 12. 阶段五：构建并发布完整快照

### 12.1 全局集合校验

```ts
export function validateCompleteSnapshot(
  replication: ReplicationSnapshot,
  metadata: readonly PackageMetadataRecord[],
  downloads: readonly PackageDownloads[],
  github: readonly PackageGitHubData[],
  dailyPeriod: DownloadPeriod,
  monthlyPeriod: DownloadPeriod,
  startedAt: string,
  completedAt: string,
): Result<CompletePluginSnapshot, RequestFailure>
```

必须验证：

```text
Replication packages == Metadata packages
Replication packages == Downloads packages
Replication packages == Package GitHub mapping packages
GitHub targets == GitHub responses
每个包恰好一个 daily point
每个包恰好一个 monthly point
所有 daily start/end 完全一致
所有 monthly start/end 完全一致
没有重复输出路径
没有 pending task
没有 retry task
```

### 12.2 发布

```ts
export function renderSnapshotEntry(
  entry: PluginSnapshotEntry,
): Result<string, RequestFailure>

export function writeSnapshotToStage(
  snapshot: CompletePluginSnapshot,
): Promise<Result<string, RequestFailure>>

export function publishStage(
  stagePath: string,
  snapshot: CompletePluginSnapshot,
): Promise<Result<PublishedSnapshot, RequestFailure>>

export interface PublishedSnapshot {
  snapshotId: string
  publishedPath: string
  publishedAt: string
}
```

发布顺序：

1. 在独立 staging 目录生成全部文件。
2. 重新统计文件数并与 snapshot entry 数量比较。
3. 对全部文件执行内容解析和 schema 校验。
4. 写入 snapshot manifest，状态为 complete。
5. 使用目录 rename 完成原子切换。
6. 发布成功后清理旧目录。

请求失败时不创建正式目录，不覆盖旧目录。保留旧目录只是保持上一个已发布快照存在，不能把它标记为本次同步成功。

## 13. 持久化状态设计

条件请求和断点续传要求持久化存储。推荐 SQLite，而不是数千个零散临时 JSON。

### 13.1 表

```text
sync_runs
replication_packages
package_metadata_cache
download_points_working
github_repository_cache
sync_tasks
published_snapshots
```

### 13.2 Run 状态

```ts
export type ActiveSyncStage
  = | 'replication'
    | 'metadata'
    | 'downloads'
    | 'github'
    | 'validation'
    | 'publishing'

export interface ReplicationBounds {
  startSequence: number
  endSequence: number
}

export interface SyncRunIdentity {
  runId: string
  businessDate: string
  startedAt: string
  updatedAt: string
}

export type SyncRun
  = | SyncRunIdentity & {
    status: 'running'
    stage: ActiveSyncStage
    replication: Presence<ReplicationBounds>
  }
  | SyncRunIdentity & {
    status: 'complete'
    completedAt: string
    replication: ReplicationBounds
  }
  | SyncRunIdentity & {
    status: 'failed'
    failedAt: string
    failedStage: ActiveSyncStage
    replication: Presence<ReplicationBounds>
    failureMessage: string
  }
```

### 13.3 Task 状态

```ts
export interface SyncTaskIdentity {
  runId: string
  source: ApiHost
  taskKey: string
}

export type SyncTask
  = | SyncTaskIdentity & {
    status: 'pending'
    attempt: 0
  }
  | SyncTaskIdentity & {
    status: 'running'
    attempt: number
    startedAt: string
  }
  | SyncTaskIdentity & {
    status: 'retry-wait'
    attempt: number
    nextAttemptAt: string
    failure: RequestFailure
  }
  | SyncTaskIdentity & {
    status: 'success'
    attempt: number
    completedAt: string
    responseStatus: number
  }
  | SyncTaskIdentity & {
    status: 'failed'
    attempt: number
    failedAt: string
    failure: RequestFailure
  }
```

每个成功请求必须在事务中同时完成：

1. 写入解析后的业务实体。
2. 写入 validator 和 response hash。
3. 将 task 状态更新为 success。

不能先把 task 标记成功，再异步保存数据。

### 13.4 Store 接口

```ts
export interface StoredEntityCount {
  count: number
}

export interface StateStore {
  readPackageMetadataCaches: () => Promise<
    Result<readonly PackageMetadataCache[], RequestFailure>
  >
  readGitHubCaches: () => Promise<
    Result<readonly GitHubRepositoryCache[], RequestFailure>
  >
  saveReplicationSnapshot: (
    runId: string,
    snapshot: ReplicationSnapshot,
  ) => Promise<Result<StoredEntityCount, RequestFailure>>
  savePackageMetadata: (
    runId: string,
    records: readonly PackageMetadataRecord[],
  ) => Promise<Result<StoredEntityCount, RequestFailure>>
  saveDownloads: (
    runId: string,
    records: readonly PackageDownloads[],
  ) => Promise<Result<StoredEntityCount, RequestFailure>>
  saveGitHubRepositories: (
    runId: string,
    records: readonly GitHubRepositoryRecord[],
  ) => Promise<Result<StoredEntityCount, RequestFailure>>
  updateRun: (run: SyncRun) => Promise<Result<SyncRun, RequestFailure>>
  updateTask: (task: SyncTask) => Promise<Result<SyncTask, RequestFailure>>
}
```

每个 save 方法必须开启数据库事务，在同一事务内写业务实体、缓存 validator、response hash 和对应 task 成功状态。返回的 `count` 必须与输入集合长度一致，否则产生 storage failure。

## 14. Pipeline 函数

```ts
export interface PipelineClock {
  nowIso: () => string
}

export interface PipelineDependencies {
  store: StateStore
  clock: PipelineClock
  replicationPolicy: HostPolicy
  npmRegistryPolicy: HostPolicy
  npmDownloadsPolicy: HostPolicy
  githubPolicy: HostPolicy
  githubToken: string
}

export function runDailyPluginPipeline(
  dependencies: PipelineDependencies,
  definitions: readonly PluginDefinition[],
  startedAt: string,
): Promise<Result<CompletePluginSnapshot, RequestFailure>>
```

严格编排伪代码：

```ts
async function runDailyPluginPipeline(
  dependencies: PipelineDependencies,
  definitions: readonly PluginDefinition[],
  startedAt: string,
): Promise<Result<CompletePluginSnapshot, RequestFailure>> {
  const replication = await createReplicationSnapshot(definitions)
  if (!replication.ok)
    return replication

  const metadataCaches = await dependencies.store.readPackageMetadataCaches()
  if (!metadataCaches.ok)
    return metadataCaches

  const metadata = await fetchAllPackageMetadata(
    replication.value,
    metadataCaches.value,
  )
  if (!metadata.ok)
    return metadata

  const periods = await resolveDownloadPeriods()
  if (!periods.ok)
    return periods

  const downloads = await fetchAllDownloads(
    replication.value.packages.map(item => item.packageName),
    periods.value[0],
    periods.value[1],
  )
  if (!downloads.ok)
    return downloads

  const packageTargets = collectPackageGitHubTargets(metadata.value)
  if (!packageTargets.ok)
    return packageTargets

  const repositoryTargets = collectUniqueGitHubTargets(packageTargets.value)
  if (!repositoryTargets.ok)
    return repositoryTargets

  const githubCaches = await dependencies.store.readGitHubCaches()
  if (!githubCaches.ok)
    return githubCaches

  const githubRecords = await fetchAllGitHubRepositories(
    repositoryTargets.value,
    githubCaches.value,
    dependencies.githubToken,
  )
  if (!githubRecords.ok)
    return githubRecords

  const github = mapGitHubRecordsToPackages(
    packageTargets.value,
    githubRecords.value,
  )
  if (!github.ok)
    return github

  const snapshot = validateCompleteSnapshot(
    replication.value,
    metadata.value,
    downloads.value,
    github.value,
    periods.value[0],
    periods.value[1],
    startedAt,
    dependencies.clock.nowIso(),
  )
  if (!snapshot.ok)
    return snapshot

  const stage = await writeSnapshotToStage(snapshot.value)
  if (!stage.ok)
    return stage

  const published = await publishStage(stage.value, snapshot.value)
  if (!published.ok)
    return published

  return { ok: true, value: snapshot.value }
}
```

开始与结束时间都必须来自 `clock.ts` 注入的单一时钟依赖，并在构造快照时校验为 ISO 8601 UTC 时间。

## 15. 每日请求规模

假设命中约 6655 个包，其中 scoped 包约 30 个，GitHub 唯一仓库数为 `R`：

```text
Replication：约 10-15 次
Package metadata：6655 次条件请求
Downloads 非 scoped：ceil(6625 / 100) × 2 ≈ 134 次
Downloads scoped：30 × 2 = 60 次
Downloads 周期锚定：2 次
GitHub：R 次条件请求
```

Package metadata 和 GitHub 两个阶段每天都会覆盖全量目标：

- 未变化的 metadata 可由 npm 返回 304。
- 未变化的 GitHub repository 可由 GitHub 返回 304。
- 304 是服务端确认后的有效响应，不是错误兜底。
- Downloads 没有使用昨日值的条件分支，每天必须拿到当期完整 200 响应。

首次执行没有条件请求缓存：

- metadata 全部返回 200，耗时和流量最高。
- GitHub 全部返回 200；如果唯一仓库数超过 Token 当前剩余额度，必须等待 rate-limit reset 后继续。

稳定运行后仍发送全量检查，但 metadata 和 GitHub 的多数响应体可由 304 避免重复传输。

## 16. 验收标准

### Replication

- 每个前缀至少覆盖一页、末页和 cursor 边界测试。
- cursor 记录被删除时不会漏掉下一条。
- changes 中新增、更新和删除均正确应用。
- 相同包不会重复出现。

### Metadata

- 普通包与 scoped 包 URL 编码正确。
- 稀疏包的缺失字段规范化为 `Presence<T>` 的 absent 分支。
- 200 和 304 都有测试。
- 304 缓存缺失时必须失败。
- package name 不一致时必须失败。

### Downloads

- bulk、单包、scoped 单包分别测试。
- 100 包边界、7000 字符边界和单包尾批分别测试。
- 缺 key、额外 key、period 不一致、负数、非整数全部失败。
- 真实 `downloads: 0` 保留为 0。
- 请求失败不会产生 0。

### GitHub

- repository 各种 URL 格式均有测试。
- 多包同仓库只发一个请求。
- 200、304、403 rate limit、429 和 404 分别测试。
- 304 的 ETag 或缓存 hash 不一致时必须失败。
- GitHub API 失败不会产生 Stars 0。

### Snapshot

- 四个 package 集合必须完全相等。
- 任意一个任务不是 success 时禁止发布。
- staging 文件数和 snapshot entries 数相等。
- 发布失败能够恢复原正式目录。
- 成功快照中的 downloads 与已识别 GitHub 仓库的 stars 都是确定值。

## 17. 最终执行语义

每天一次完整 Run 的成功定义是：

```text
Replication 全量完成
AND 全量 metadata 200/304 检查完成
AND 全量 daily Downloads 完成
AND 全量 monthly Downloads 完成
AND 全量 GitHub repository 200/304 检查完成
AND 全局集合与周期校验通过
AND staging 发布成功
```

任何一项不成立，本次 Run 必须是 failed 或 retry-wait，不能是 complete。调度系统可以稍后继续同一个 Run；只有获得全部必要数据后，才能发布该业务日期对应的完整快照。
