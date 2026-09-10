// 从 npm metadata 中识别并规范化 GitHub 仓库。
// 优先级：repository -> homepage -> bugsUrl。
// 没有可识别的 GitHub 链接是合法 absent；明显声明为 GitHub 链接但无法解析是 invariant failure。

import type { GitHubRepositoryTarget, PackageGitHubTarget, PackageMetadata, PackageMetadataRecord, RequestFailure, Result } from './contracts'
import {
  failure,

  ok,

} from './contracts'

type ParsedGitHubSource
  = | { kind: 'target', target: GitHubRepositoryTarget }
    | { kind: 'invalid' }
    | { kind: 'not-github' }

const OWNER_PATTERN = /^[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?$/i
const REPOSITORY_PATTERN = /^[\w.-]+$/

function stripGitSuffix(value: string): string {
  if (value.endsWith('.git'))
    return value.slice(0, -4)
  return value
}

function stripHashSuffix(value: string): string {
  const hashIndex = value.indexOf('#')
  if (hashIndex >= 0)
    return value.slice(0, hashIndex)
  return value
}

function targetFromSlug(slug: string): ParsedGitHubSource {
  const working = stripGitSuffix(stripHashSuffix(slug.trim()))
  const separatorIndex = working.indexOf('/')
  if (separatorIndex <= 0 || separatorIndex === working.length - 1)
    return { kind: 'invalid' }
  const owner = working.slice(0, separatorIndex)
  const repositoryPart = working.slice(separatorIndex + 1)
  const firstPathSegment = repositoryPart.split('/')[0]
  if (typeof firstPathSegment !== 'string' || firstPathSegment.length === 0)
    return { kind: 'invalid' }
  const repository = stripGitSuffix(firstPathSegment)
  if (!OWNER_PATTERN.test(owner) || owner.includes('--'))
    return { kind: 'invalid' }
  if (!REPOSITORY_PATTERN.test(repository) || repository === '.' || repository === '..')
    return { kind: 'invalid' }
  return {
    kind: 'target',
    target: {
      fullName: `${owner}/${repository}`,
      owner,
      repository,
    },
  }
}

function targetFromWebUrl(source: string): ParsedGitHubSource {
  let url: URL
  try {
    url = new URL(source)
  }
  catch {
    return { kind: 'invalid' }
  }
  if (url.hostname !== 'github.com' && url.hostname !== 'www.github.com')
    return { kind: 'not-github' }
  const segments = url.pathname.split('/').filter(segment => segment.length > 0)
  const rawOwner = segments[0]
  const rawRepository = segments[1]
  if (typeof rawOwner !== 'string' || typeof rawRepository !== 'string')
    return { kind: 'invalid' }
  const repository = stripGitSuffix(rawRepository)
  if (!OWNER_PATTERN.test(rawOwner) || rawOwner.includes('--'))
    return { kind: 'invalid' }
  if (!REPOSITORY_PATTERN.test(repository) || repository === '.' || repository === '..')
    return { kind: 'invalid' }
  return {
    kind: 'target',
    target: {
      fullName: `${rawOwner}/${repository}`,
      owner: rawOwner,
      repository,
    },
  }
}

function parseGitHubSource(source: string): ParsedGitHubSource {
  const trimmed = source.trim()
  if (trimmed.length === 0)
    return { kind: 'not-github' }

  if (trimmed.startsWith('github:'))
    return targetFromSlug(trimmed.slice('github:'.length))
  if (trimmed.startsWith('git@github.com:'))
    return targetFromSlug(trimmed.slice('git@github.com:'.length))

  let working = trimmed
  if (working.startsWith('git+'))
    working = working.slice(4)
  if (working.startsWith('https://') || working.startsWith('http://') || working.startsWith('git://'))
    return targetFromWebUrl(working)

  // 非协议形式：仅当字面量明显指向 github 时才是 declared 链接。
  if (trimmed.includes('github.com'))
    return targetFromWebUrl(trimmed)
  if (/^[\w.-]+\/[\w.-]+/.test(trimmed))
    return targetFromSlug(trimmed)
  return { kind: 'not-github' }
}

interface MetadataSourceCandidate {
  origin: 'repository' | 'homepage' | 'bugsUrl'
  value: string
}

function collectSourceCandidates(metadata: PackageMetadata): readonly MetadataSourceCandidate[] {
  const candidates: MetadataSourceCandidate[] = []
  if (metadata.repository.state === 'present') {
    const repository = metadata.repository.value
    candidates.push({
      origin: 'repository',
      value: repository.kind === 'string' ? repository.value : repository.url,
    })
  }
  if (metadata.homepage.state === 'present')
    candidates.push({ origin: 'homepage', value: metadata.homepage.value })
  if (metadata.bugsUrl.state === 'present')
    candidates.push({ origin: 'bugsUrl', value: metadata.bugsUrl.value })
  return candidates
}

export function extractGitHubTarget(metadata: PackageMetadata): Result<PackageGitHubTarget, RequestFailure> {
  for (const candidate of collectSourceCandidates(metadata)) {
    const parsed = parseGitHubSource(candidate.value)
    if (parsed.kind === 'target') {
      return ok({
        kind: 'repository',
        packageName: metadata.name,
        target: parsed.target,
      })
    }
    if (parsed.kind === 'invalid') {
      return failure({
        kind: 'invariant',
        message: `package "${metadata.name}" declares an unparseable GitHub URL in ${candidate.origin}: ${candidate.value}`,
      })
    }
  }
  return ok({ kind: 'absent', packageName: metadata.name })
}

export function collectPackageGitHubTargets(
  metadataRecords: readonly PackageMetadataRecord[],
): Result<readonly PackageGitHubTarget[], RequestFailure> {
  const targets: PackageGitHubTarget[] = []
  for (const record of metadataRecords) {
    const extracted = extractGitHubTarget(record.metadata)
    if (!extracted.ok)
      return extracted
    targets.push(extracted.value)
  }
  return ok(targets)
}

export function collectUniqueGitHubTargets(
  packageTargets: readonly PackageGitHubTarget[],
): Result<readonly GitHubRepositoryTarget[], RequestFailure> {
  const unique = new Map<string, GitHubRepositoryTarget>()
  for (const target of packageTargets) {
    if (target.kind !== 'repository')
      continue
    const key = target.target.fullName.toLowerCase()
    if (!unique.has(key))
      unique.set(key, target.target)
  }
  const collected = [...unique.values()]
  collected.sort((left, right) => left.fullName.localeCompare(right.fullName))
  return ok(collected)
}
