import type { CommunityProject } from './types.ts'

export type { CommunityProject } from './types'

export function defineProjectMeta<T extends CommunityProject>(project: T): T {
  return project
}
