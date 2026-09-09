import type { ProjectCategory } from '@vuejs-community/schema'
import type { ComputedRef, Ref } from 'vue'
import type { ProjectMetaStatType, ProjectRecord } from '~~/shared/types/project'
import { createContext } from 'reka-ui'

export type ProjectMetaSelection = Record<ProjectMetaStatType, string | undefined>

export interface ProjectResourceContext {
  category: ComputedRef<ProjectCategory>
  selectedMeta: Readonly<ProjectMetaSelection>
  projects: Readonly<Ref<readonly ProjectRecord[]>>
  hasMore: Readonly<Ref<boolean>>
  isLoadingMore: Readonly<Ref<boolean>>
  error: Readonly<Ref<unknown>>
  isMetaSelected: (type: ProjectMetaStatType, value: string) => boolean
  toggleMeta: (type: ProjectMetaStatType, value: string) => void
  loadMore: () => Promise<void>
}

export const [useProjectResourceContext, provideProjectResourceContext]
  = createContext<ProjectResourceContext>('ProjectResource')
