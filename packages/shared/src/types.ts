export type PackageTimeGranularity = 'month' | 'week'

export interface RequestPackageDownload {
  downloads: number
  start: string
  end: string
  package: string
}

export interface GithubInfo {
  repo: {
    id: number
    name: string
    repo: string
    description: string
    createdAt: string
    updatedAt: string
    pushedAt: string
    stars: number
    watchers: number
    forks: number
    defaultBranch: string
  }
}
