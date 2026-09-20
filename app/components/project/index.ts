import type { ProjectCategory } from '@vuejs-community/schema'
import type { ComputedRef, Ref } from 'vue'
import type { ProjectMetaStatType, ProjectRecord } from '~~/shared/types/project'
import { createContext } from 'reka-ui'

export type ProjectMetaSelection = Record<ProjectMetaStatType, string | undefined>

export interface ProjectResourceContext {
  category: ComputedRef<ProjectCategory>
  keyword: Ref<string>
  selectedMeta: ProjectMetaSelection
  projects: Readonly<Ref<readonly ProjectRecord[]>>
  total: Readonly<Ref<number>>
  hasMore: Readonly<Ref<boolean>>
  isLoadingMore: Readonly<Ref<boolean>>
  status: Readonly<Ref<'idle' | 'pending' | 'success' | 'error'>>
  error: Readonly<Ref<unknown>>
  loadMore: () => Promise<void>
  refresh: () => Promise<void>
}

export const [useProjectResourceContext, provideProjectResourceContext]
  = createContext<ProjectResourceContext>('ProjectResource')
