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

export interface CategoryCount {
  category: string
  count: number
}

export interface ProjectFilters {
  category?: string
  source?: string
  downloads_monthly?: number
  downloads_weekly?: number
  stars?: number
}
