// 快照发布：staging 目录生成全部文件 -> 统计文件数 -> 内容回读校验 -> manifest -> 原子目录切换。
// 请求失败时不创建正式目录、不覆盖旧目录；旧目录仅代表上一次已发布快照。

import type { CompletePluginSnapshot, PluginSnapshotEntry, PublishedSnapshot, RequestFailure, Result } from './contracts'
import { randomUUID } from 'node:crypto'
import { mkdir, readdir, readFile, rename, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import {

  failure,
  ok,

} from './contracts'
import { snapshotEntryFileSchema, snapshotManifestSchema } from './schemas'
import { hasNodeErrorCode } from './utils'

export interface SnapshotPublisherOptions {
  packageRoot: string
  nowIso: () => string
}

export interface SnapshotPublisher {
  writeSnapshotToStage: (snapshot: CompletePluginSnapshot) => Promise<Result<string, RequestFailure>>
  publishStage: (stagePath: string, snapshot: CompletePluginSnapshot) => Promise<Result<PublishedSnapshot, RequestFailure>>
}

export function snapshotOutputRelativePath(target: { packageName: string, definition: { directory: string } }): Result<string, RequestFailure> {
  const segments = target.packageName.split('/')
  for (const segment of segments) {
    if (segment.length === 0 || segment === '.' || segment === '..') {
      return failure({
        kind: 'invariant',
        message: `unsafe npm package name cannot be published: ${target.packageName}`,
      })
    }
  }
  const last = segments.at(-1)
  if (typeof last !== 'string' || last.length === 0) {
    return failure({
      kind: 'invariant',
      message: `npm package name has no final path segment: ${target.packageName}`,
    })
  }
  const relativePath = [target.definition.directory, ...segments.slice(0, -1), `${last}.json`].join('/')
  return ok(relativePath)
}

function publishFailure(operation: string, message: string): RequestFailure {
  return { kind: 'publish', operation, message }
}

function renderSnapshotEntry(entry: PluginSnapshotEntry): Result<string, RequestFailure> {
  const metadata = entry.packageMetadata.metadata
  const filePayload = {
    packageName: entry.target.packageName,
    type: entry.target.definition.type,
    directory: entry.target.definition.directory,
    icon: entry.target.definition.icon,
    version: metadata.version,
    ...(metadata.description.state === 'present' ? { description: metadata.description.value } : {}),
    ...(metadata.keywords.state === 'present' ? { keywords: [...metadata.keywords.value] } : {}),
    ...(metadata.repository.state === 'present'
      ? {
          repository: metadata.repository.value.kind === 'string'
            ? metadata.repository.value.value
            : metadata.repository.value.url,
        }
      : {}),
    ...(metadata.homepage.state === 'present' ? { homepage: metadata.homepage.value } : {}),
    ...(metadata.deprecated.state === 'present' ? { deprecated: metadata.deprecated.value } : {}),
    daily: {
      downloads: entry.downloads.daily.downloads,
      start: entry.downloads.daily.start,
      end: entry.downloads.daily.end,
    },
    monthly: {
      downloads: entry.downloads.monthly.downloads,
      start: entry.downloads.monthly.start,
      end: entry.downloads.monthly.end,
    },
    ...(entry.github.kind === 'repository'
      ? {
          github: {
            fullName: entry.github.repository.data.fullName,
            htmlUrl: entry.github.repository.data.htmlUrl,
            stars: entry.github.repository.data.stars,
            archived: entry.github.repository.data.archived,
            disabled: entry.github.repository.data.disabled,
          },
        }
      : {}),
  }
  return ok(JSON.stringify(filePayload))
}

async function countSnapshotFiles(root: string): Promise<number> {
  const entries = await readdir(root, { recursive: true, withFileTypes: true })
  return entries.filter(entry => entry.isFile() && entry.name !== 'snapshot.json').length
}

export function createSnapshotPublisher(options: SnapshotPublisherOptions): SnapshotPublisher {
  const stageRoot = resolve(options.packageRoot, '.sync-work/stage')
  const publishedRoot = resolve(options.packageRoot, 'snapshots/current_complete_snapshot')

  return {
    async writeSnapshotToStage(snapshot: CompletePluginSnapshot): Promise<Result<string, RequestFailure>> {
      const stagePath = resolve(stageRoot, snapshot.snapshotId)
      try {
        await rm(stagePath, { recursive: true, force: true })
        await mkdir(stagePath, { recursive: true })
      }
      catch (error) {
        if (error instanceof Error)
          return failure(publishFailure('prepare-stage', error.message))
        return failure(publishFailure('prepare-stage', 'staging directory preparation failed'))
      }

      const renderedFiles: { relativePath: string, content: string }[] = []
      const writtenPaths = new Set<string>()
      for (const entry of snapshot.entries) {
        const pathResult = snapshotOutputRelativePath(entry.target)
        if (!pathResult.ok)
          return pathResult
        if (writtenPaths.has(pathResult.value)) {
          return failure(publishFailure('render-entry', `duplicate staged file path: ${pathResult.value}`))
        }
        writtenPaths.add(pathResult.value)
        const rendered = renderSnapshotEntry(entry)
        if (!rendered.ok)
          return rendered
        renderedFiles.push({ relativePath: pathResult.value, content: rendered.value })
      }

      try {
        for (let start = 0; start < renderedFiles.length; start += 100) {
          await Promise.all(renderedFiles.slice(start, start + 100).map(async (file) => {
            const absolutePath = resolve(stagePath, file.relativePath)
            await mkdir(dirname(absolutePath), { recursive: true })
            await writeFile(absolutePath, file.content, { flag: 'wx' })
          }))
        }

        const fileCount = await countSnapshotFiles(stagePath)
        if (fileCount !== snapshot.entries.length) {
          return failure(publishFailure(
            'stage-file-count',
            `staged file count (${fileCount}) does not match snapshot entry count (${snapshot.entries.length})`,
          ))
        }

        for (const file of renderedFiles) {
          const absolutePath = resolve(stagePath, file.relativePath)
          const stored = await readFile(absolutePath, 'utf8')
          const validated = snapshotEntryFileSchema.safeParse(JSON.parse(stored))
          if (!validated.success) {
            return failure(publishFailure(
              'stage-entry-revalidation',
              `staged file "${file.relativePath}" failed schema validation: ${validated.error.issues[0]?.message ?? ''}`,
            ))
          }
        }

        const manifest = {
          snapshotId: snapshot.snapshotId,
          status: 'complete',
          startedAt: snapshot.startedAt,
          completedAt: snapshot.completedAt,
          entryCount: snapshot.entries.length,
          replicationStartSequence: snapshot.replicationStartSequence,
          replicationEndSequence: snapshot.replicationEndSequence,
          dailyPeriod: snapshot.dailyPeriod,
          monthlyPeriod: snapshot.monthlyPeriod,
        }
        const manifestCheck = snapshotManifestSchema.safeParse(manifest)
        if (!manifestCheck.success) {
          return failure(publishFailure(
            'stage-manifest',
            `snapshot manifest failed schema validation: ${manifestCheck.error.issues[0]?.message ?? ''}`,
          ))
        }
        await writeFile(resolve(stagePath, 'snapshot.json'), JSON.stringify(manifest), { flag: 'wx' })
      }
      catch (error) {
        if (error instanceof Error)
          return failure(publishFailure('write-stage', error.message))
        return failure(publishFailure('write-stage', 'staging write failed'))
      }

      return ok(stagePath)
    },

    async publishStage(stagePath: string, snapshot: CompletePluginSnapshot): Promise<Result<PublishedSnapshot, RequestFailure>> {
      try {
        await mkdir(dirname(publishedRoot), { recursive: true })
      }
      catch (error) {
        if (error instanceof Error)
          return failure(publishFailure('prepare-published-parent', error.message))
        return failure(publishFailure('prepare-published-parent', 'published parent directory preparation failed'))
      }

      const backupPath = resolve(options.packageRoot, '.sync-work', `backup-${randomUUID()}`)
      let hasBackup = false
      try {
        try {
          await rename(publishedRoot, backupPath)
          hasBackup = true
        }
        catch (error) {
          if (error instanceof Error && !hasNodeErrorCode(error, 'ENOENT'))
            throw error
        }

        try {
          await rename(stagePath, publishedRoot)
        }
        catch (error) {
          if (hasBackup)
            await rename(backupPath, publishedRoot)
          throw error
        }
      }
      catch (error) {
        if (error instanceof Error)
          return failure(publishFailure('atomic-swap', error.message))
        return failure(publishFailure('atomic-swap', 'atomic directory swap failed'))
      }

      if (hasBackup) {
        try {
          await rm(backupPath, { recursive: true, force: true })
        }
        catch (error) {
          if (error instanceof Error)
            return failure(publishFailure('cleanup-previous-snapshot', error.message))
          return failure(publishFailure('cleanup-previous-snapshot', 'previous snapshot cleanup failed'))
        }
      }

      const published: PublishedSnapshot = {
        snapshotId: snapshot.snapshotId,
        publishedPath: publishedRoot,
        publishedAt: options.nowIso(),
      }
      return ok(published)
    },
  }
}
