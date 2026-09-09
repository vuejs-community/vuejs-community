import type { ProjectCategory } from '@vuejs-community/schema'
import type { MaybeRefOrGetter } from 'vue'
import type { ProjectMetaStats } from '~~/shared/types/project'

export async function useProjectMeta(category: MaybeRefOrGetter<ProjectCategory>) {
  const categoryValue = computed(() => toValue(category))

  return useFetch<ProjectMetaStats>(
    () => `/api/projects/${categoryValue.value}/meta`,
    {
      key: computed(() => `project-meta:${categoryValue.value}`),
      default: () => ({
        types: [],
        tags: [],
      }),
    },
  )
}
