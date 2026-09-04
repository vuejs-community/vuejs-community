export interface ProjectRecord {
  name: string
  description: string
  category: string
  source: string
  github: string
  npm: string
  website: string
  downloads_monthly: number
  downloads_weekly: number
  stars: number
}

export interface ProjectFilters {
  category?: string
  source?: string
  downloads_monthly?: number
  downloads_weekly?: number
  stars?: number
}
