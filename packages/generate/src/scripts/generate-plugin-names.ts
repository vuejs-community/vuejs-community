// @env node
// 入口脚本：只负责装配和启动每日全量同步。
// GitHub Token 从仓库根目录 .env 的 GENERATE_TOKEN 读取（认证后 5000 次/小时）。

import type { RequestFailure, Result } from '../generate-plugin/contracts'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createSystemClock } from '../generate-plugin/clock'
import { pluginDefinitions } from '../generate-plugin/definitions'
import { DEFAULT_HOST_POLICIES, runDailyPluginPipeline } from '../generate-plugin/pipeline'
import { createSnapshotPublisher } from '../generate-plugin/snapshot-publisher'
import { openStateStore } from '../generate-plugin/state-store'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const packageRoot = resolve(scriptDir, '../..')
const repositoryRoot = resolve(scriptDir, '../../../..')

function readEnvFile(envPath: string): Map<string, string> {
  const entries = new Map<string, string>()
  let content: string
  try {
    content = readFileSync(envPath, 'utf8')
  }
  catch {
    return entries
  }
  for (const rawLine of content.split('\n')) {
    const line = rawLine.trim()
    if (line.length === 0 || line.startsWith('#'))
      continue
    const separatorIndex = line.indexOf('=')
    if (separatorIndex <= 0)
      continue
    const key = line.slice(0, separatorIndex).trim()
    let value = line.slice(separatorIndex + 1).trim()
    const wrappedInDoubleQuotes = value.startsWith('"') && value.endsWith('"') && value.length >= 2
    const wrappedInSingleQuotes = value.startsWith('\'') && value.endsWith('\'') && value.length >= 2
    if (wrappedInDoubleQuotes || wrappedInSingleQuotes)
      value = value.slice(1, -1)
    entries.set(key, value)
  }
  return entries
}

function resolveGitHubToken(): Result<string, RequestFailure> {
  const fromEnvironment = process.env.GENERATE_TOKEN
  if (typeof fromEnvironment === 'string' && fromEnvironment.length > 0)
    return { ok: true, value: fromEnvironment }
  const fromEnvFile = readEnvFile(resolve(repositoryRoot, '.env')).get('GENERATE_TOKEN')
  if (typeof fromEnvFile === 'string' && fromEnvFile.length > 0)
    return { ok: true, value: fromEnvFile }
  return {
    ok: false,
    error: {
      kind: 'invariant',
      message: 'GENERATE_TOKEN is missing: set it in the repository root .env file or in the process environment',
    },
  }
}

async function main(): Promise<void> {
  const token = resolveGitHubToken()
  if (!token.ok) {
    console.error('daily plugin pipeline cannot start.', JSON.stringify(token.error))
    process.exitCode = 1
    return
  }

  const clock = createSystemClock()
  const store = openStateStore({
    databasePath: resolve(packageRoot, '.sync-work/state.sqlite'),
    nowIso: () => clock.nowIso(),
  })
  const publisher = createSnapshotPublisher({ packageRoot, nowIso: () => clock.nowIso() })

  try {
    const outcome = await runDailyPluginPipeline(
      {
        store,
        clock,
        replicationPolicy: DEFAULT_HOST_POLICIES.replication,
        npmRegistryPolicy: DEFAULT_HOST_POLICIES['npm-registry'],
        npmDownloadsPolicy: DEFAULT_HOST_POLICIES['npm-downloads'],
        githubPolicy: DEFAULT_HOST_POLICIES.github,
        githubToken: token.value,
        publisher,
      },
      pluginDefinitions,
      clock.nowIso(),
    )
    if (!outcome.ok) {
      console.error('daily plugin pipeline failed.', JSON.stringify(outcome.error))
      process.exitCode = 1
      return
    }
    console.log(`daily plugin pipeline finished: snapshotId=${outcome.value.snapshotId} entries=${outcome.value.entries.length}`)
  }
  finally {
    store.close()
  }
}

try {
  await main()
}
catch (error) {
  console.error('daily plugin pipeline crashed.', error)
  process.exitCode = 1
}
