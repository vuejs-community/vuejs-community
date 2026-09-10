// 快照全局校验：四个包集合完全相等、周期一致、无重复输出路径。
// 只有通过校验的数据才能构造 CompletePluginSnapshot —— 该类型没有 partial、pending 或 retry 分支。

import type { CompletePluginSnapshot, PackageDownloads, PackageGitHubData, PackageMetadataRecord, PluginSnapshotEntry, ReplicationSnapshot, RequestFailure, Result } from './contracts'
import { isValidIsoUtcTimestamp } from './clock'
import {

  failure,
  ok,

} from './contracts'
import { snapshotOutputRelativePath } from './snapshot-publisher'

function samePackageNameList(
  left: readonly string[],
  right: readonly string[],
): boolean {
  if (left.length !== right.length)
    return false
  return left.every((value, index) => value === right[index])
}

function validateDownloadPointPeriods(
  downloads: PackageDownloads,
  dailyPeriod: CompletePluginSnapshot['dailyPeriod'],
  monthlyPeriod: CompletePluginSnapshot['monthlyPeriod'],
): Result<boolean, RequestFailure> {
  if (downloads.daily.start !== dailyPeriod.start || downloads.daily.end !== dailyPeriod.end) {
    return failure({
      kind: 'invariant',
      message: `daily downloads for "${downloads.packageName}" (${downloads.daily.start}..${downloads.daily.end}) do not match the anchored daily period (${dailyPeriod.start}..${dailyPeriod.end})`,
    })
  }
  if (downloads.monthly.start !== monthlyPeriod.start || downloads.monthly.end !== monthlyPeriod.end) {
    return failure({
      kind: 'invariant',
      message: `monthly downloads for "${downloads.packageName}" (${downloads.monthly.start}..${downloads.monthly.end}) do not match the anchored monthly period (${monthlyPeriod.start}..${monthlyPeriod.end})`,
    })
  }
  return ok(true)
}

export function validateCompleteSnapshot(
  replication: ReplicationSnapshot,
  metadata: readonly PackageMetadataRecord[],
  downloads: readonly PackageDownloads[],
  github: readonly PackageGitHubData[],
  dailyPeriod: CompletePluginSnapshot['dailyPeriod'],
  monthlyPeriod: CompletePluginSnapshot['monthlyPeriod'],
  startedAt: string,
  completedAt: string,
): Result<CompletePluginSnapshot, RequestFailure> {
  if (!isValidIsoUtcTimestamp(startedAt)) {
    return failure({
      kind: 'invariant',
      message: `snapshot startedAt "${startedAt}" is not an ISO 8601 UTC timestamp`,
    })
  }
  if (!isValidIsoUtcTimestamp(completedAt)) {
    return failure({
      kind: 'invariant',
      message: `snapshot completedAt "${completedAt}" is not an ISO 8601 UTC timestamp`,
    })
  }
  if (completedAt < startedAt) {
    return failure({
      kind: 'invariant',
      message: `snapshot completedAt "${completedAt}" precedes startedAt "${startedAt}"`,
    })
  }

  const replicationNames = replication.packages.map(target => target.packageName).sort()
  const metadataNames = metadata.map(record => record.target.packageName).sort()
  const downloadNames = downloads.map(item => item.packageName).sort()
  const githubNames = github.map(item => item.packageName).sort()

  if (!samePackageNameList(replicationNames, metadataNames)
    || !samePackageNameList(replicationNames, downloadNames)
    || !samePackageNameList(replicationNames, githubNames)) {
    return failure({
      kind: 'invariant',
      message: `snapshot package sets differ: replication=${replicationNames.length} metadata=${metadataNames.length} downloads=${downloadNames.length} github=${githubNames.length}`,
    })
  }

  const downloadsMap = new Map<string, PackageDownloads>()
  for (const item of downloads) {
    if (downloadsMap.has(item.packageName)) {
      return failure({
        kind: 'invariant',
        message: `downloads contain a duplicate entry for "${item.packageName}"`,
      })
    }
    downloadsMap.set(item.packageName, item)
  }

  const githubMap = new Map<string, PackageGitHubData>()
  for (const item of github) {
    if (githubMap.has(item.packageName)) {
      return failure({
        kind: 'invariant',
        message: `github mapping contains a duplicate entry for "${item.packageName}"`,
      })
    }
    githubMap.set(item.packageName, item)
  }

  for (const item of downloads) {
    const periodCheck = validateDownloadPointPeriods(item, dailyPeriod, monthlyPeriod)
    if (!periodCheck.ok)
      return periodCheck
  }

  const outputPathSet = new Set<string>()
  for (const target of replication.packages) {
    const pathResult = snapshotOutputRelativePath(target)
    if (!pathResult.ok)
      return pathResult
    if (outputPathSet.has(pathResult.value)) {
      return failure({
        kind: 'invariant',
        message: `snapshot contains a duplicate output path: ${pathResult.value}`,
      })
    }
    outputPathSet.add(pathResult.value)
  }

  const metadataMap = new Map(metadata.map(record => [record.target.packageName, record]))
  const entries: PluginSnapshotEntry[] = []
  for (const target of replication.packages) {
    const record = metadataMap.get(target.packageName)
    const downloadItem = downloadsMap.get(target.packageName)
    const githubItem = githubMap.get(target.packageName)
    if (typeof record !== 'object' || typeof downloadItem !== 'object' || typeof githubItem !== 'object') {
      return failure({
        kind: 'invariant',
        message: `assembled data for "${target.packageName}" is missing despite matching package sets`,
      })
    }
    entries.push({
      target,
      packageMetadata: record,
      downloads: downloadItem,
      github: githubItem,
    })
  }

  return ok({
    snapshotId: `${dailyPeriod.end}-${replication.endSequence}`,
    startedAt,
    completedAt,
    replicationStartSequence: replication.startSequence,
    replicationEndSequence: replication.endSequence,
    dailyPeriod,
    monthlyPeriod,
    entries,
  })
}
