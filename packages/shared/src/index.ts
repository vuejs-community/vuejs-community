import type { GithubInfo, PackageTimeGranularity, RequestPackageDownload } from './types.ts'
import { ofetch } from 'ofetch'

const MAX_RETRIES = 10
const RETRY_DELAY_MS = 1000

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function fetchWithRetry<T>(request: () => Promise<T>, isValid: (data: T) => boolean): Promise<T | undefined> {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const data = await request()
      if (isValid(data))
        return data
    }
    catch {
    }
    if (attempt < MAX_RETRIES)
      await sleep(RETRY_DELAY_MS)
  }
  return undefined
}

export async function getNpmPackageDownload(name: string, type: PackageTimeGranularity): Promise<number> {
  const result = await fetchWithRetry(
    () => ofetch<RequestPackageDownload>(`https://api.npmjs.org/downloads/point/last-${type}/${name}`),
    data => typeof data?.downloads === 'number' && Number.isFinite(data.downloads),
  )
  return result?.downloads ?? 0
}

export async function getGithubStar(repo: string): Promise<number> {
  const result = await fetchWithRetry(
    () => ofetch<GithubInfo>(`https://ungh.cc/repos/${repo}`),
    data => typeof data?.repo?.stars === 'number' && Number.isFinite(data.repo.stars),
  )
  return result?.repo?.stars ?? 0
}
