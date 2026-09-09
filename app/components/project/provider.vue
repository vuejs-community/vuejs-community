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

const category = computed(() => props.category)
const keyword = shallowRef('')
const debouncedKeyword = refDebounced(keyword, 300)
const selectedMeta = reactive<Record<ProjectMetaStatType, string | undefined>>({
  types: undefined,
  tags: undefined,
})
const filters = computed<ProjectFilters>(() => ({
  keyword: debouncedKeyword.value.trim() || undefined,
  category: category.value,
  type: selectedMeta.types,
  tag: selectedMeta.tags,
}))

const {
  projects,
  hasMore,
  isLoadingMore,
  error,
  loadMore,
} = await useProjects(filters)

watch(category, () => {
  selectedMeta.types = undefined
  selectedMeta.tags = undefined
})

provideProjectResourceContext({
  category,
  keyword,
  selectedMeta,
  projects,
  hasMore,
  isLoadingMore,
  error,
  loadMore,
})
</script>
