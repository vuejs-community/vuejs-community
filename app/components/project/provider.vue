<template>
  <slot />
</template>

<script setup lang="ts">
import type { ProjectCategory } from '@vuejs-community/schema'
import { provideProjectResourceContext } from '.'

defineOptions({
  name: 'ProjectProvider',
})

const props = defineProps<{
  category: ProjectCategory
}>()

const route = useRoute()
const router = useRouter()
const category = computed(() => props.category)
const queryValue = (value: unknown) => typeof value === 'string' ? value : undefined
const keyword = shallowRef(queryValue(route.query.q) ?? '')
const debouncedKeyword = refDebounced(keyword, 300)
const selectedMeta = reactive<Record<ProjectMetaStatType, string | undefined>>({
  types: queryValue(route.query.type),
  tags: queryValue(route.query.tag),
})
const filters = computed<ProjectFilters>(() => ({
  keyword: debouncedKeyword.value.trim() || undefined,
  category: category.value,
  type: selectedMeta.types,
  tag: selectedMeta.tags,
}))

const {
  projects,
  total,
  hasMore,
  isLoadingMore,
  status,
  error,
  loadMore,
  refresh,
} = await useProjects(filters)

watch(category, () => {
  selectedMeta.types = undefined
  selectedMeta.tags = undefined
})

watch(
  () => route.query,
  (query) => {
    keyword.value = queryValue(query.q) ?? ''
    selectedMeta.types = queryValue(query.type)
    selectedMeta.tags = queryValue(query.tag)
  },
)

watch(
  [debouncedKeyword, () => selectedMeta.types, () => selectedMeta.tags],
  ([nextKeyword, nextType, nextTag]) => {
    const query = {
      ...route.query,
      q: nextKeyword.trim() || undefined,
      type: nextType,
      tag: nextTag,
    }
    const currentQuery = JSON.stringify(route.query)
    const nextQuery = JSON.stringify(Object.fromEntries(
      Object.entries(query).filter(([, value]) => value !== undefined),
    ))

    if (currentQuery !== nextQuery)
      void router.replace({ query })
  },
)

provideProjectResourceContext({
  category,
  keyword,
  selectedMeta,
  projects,
  total,
  hasMore,
  isLoadingMore,
  status,
  error,
  loadMore,
  refresh,
})
</script>
