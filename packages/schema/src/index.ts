import type { CommunityProject } from '@/types.ts'

export type { CommunityProject } from './types'

export function defineProject<T extends CommunityProject>(project: T): T {
  return project
}
