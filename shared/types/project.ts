import type { CommunityProject } from '@vuejs-community/schema'

export interface ProjectRecord {
  name: CommunityProject['name']
  description: CommunityProject['description']
  icon: CommunityProject['icon']
  category: string
  source: string
  github: string
  npm: string
  website: string
  downloads_monthly: number
  downloads_weekly: number
  stars: number
}

export interface ProjectsResponse {
  data: ProjectRecord[]
  total: number
  more: boolean
}

export interface CategoryCount {
  category: string
  count: number
}

export type CategoryCounts = Record<string, number>

export type ProjectMetaStatType = 'tags' | 'types'

export interface ProjectMetaStat {
  value: string
  count: number
}

export type ProjectMetaStats = Record<ProjectMetaStatType, ProjectMetaStat[]>

export interface ProjectFilters {
  keyword?: string
  category?: string
  source?: string
  type?: string
  tag?: string
  downloads_monthly?: number
  downloads_weekly?: number
  stars?: number
}
