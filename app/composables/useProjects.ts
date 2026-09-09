import type { MaybeRefOrGetter } from 'vue'
import type { ProjectFilters, ProjectRecord, ProjectsResponse } from '~~/shared/types/project'

export async function useProjects(filters: MaybeRefOrGetter<Readonly<ProjectFilters>> = {}) {
  const page = shallowRef(0)
  const projects = shallowRef<ProjectRecord[]>([])
  const total = shallowRef(0)
  const hasMore = shallowRef(false)
  const isLoadingMore = shallowRef(false)
  const loadMoreError = shallowRef<Error | null>(null)
  const resolvedFilters = computed(() => toValue(filters))
  const filtersKey = computed(() => JSON.stringify(
    Object.entries(resolvedFilters.value)
      .filter(([, value]) => value !== undefined && value !== '')
      .sort(([left], [right]) => left.localeCompare(right)),
  ))

  const {
    data,
    error: initialError,
    refresh,
    status,
  } = await useFetch<ProjectsResponse>('/api/projects', {
    key: computed(() => `projects:${filtersKey.value}`),
    query: computed(() => ({
      ...resolvedFilters.value,
      more: 0,
    })),
  })

  function applyFirstPage(response?: ProjectsResponse) {
    page.value = 0
    projects.value = response?.data ?? []
    total.value = response?.total ?? 0
    hasMore.value = response?.more ?? false
  }

  watch(data, response => applyFirstPage(response), { immediate: true })

  watch(filtersKey, () => {
    page.value = 0
    projects.value = []
    total.value = 0
    hasMore.value = false
    loadMoreError.value = null
  })

  const error = computed(() => initialError.value ?? loadMoreError.value)

  async function loadMore() {
    if (!hasMore.value || isLoadingMore.value)
      return

    isLoadingMore.value = true
    loadMoreError.value = null

    try {
      const nextPage = page.value + 1
      const requestFiltersKey = filtersKey.value
      const response = await $fetch<ProjectsResponse>('/api/projects', {
        query: {
          ...resolvedFilters.value,
          more: nextPage,
        },
      })

      if (requestFiltersKey !== filtersKey.value)
        return

      page.value = nextPage
      projects.value = [...projects.value, ...response.data]
      total.value = response.total
      hasMore.value = response.more
    }
    catch (cause) {
      loadMoreError.value = cause instanceof Error
        ? cause
        : new Error('Failed to load more projects')
    }
    finally {
      isLoadingMore.value = false
    }
  }

  async function refreshProjects() {
    loadMoreError.value = null
    await refresh()
    applyFirstPage(data.value)
  }

  return {
    projects: readonly(projects),
    total: readonly(total),
    hasMore: readonly(hasMore),
    isLoadingMore: readonly(isLoadingMore),
    status: readonly(status),
    error,
    loadMore,
    refresh: refreshProjects,
  }
}
