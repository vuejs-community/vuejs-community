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
  hasMore: Readonly<Ref<boolean>>
  isLoadingMore: Readonly<Ref<boolean>>
  error: Readonly<Ref<unknown>>
  loadMore: () => Promise<void>
}

export const [useProjectResourceContext, provideProjectResourceContext]
  = createContext<ProjectResourceContext>('ProjectResource')
