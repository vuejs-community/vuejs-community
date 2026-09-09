<template>
  <div class="hidden p-7.5 md:block" />
  <PageHeader :title="title" />

  <ProjectProvider :category="category">
    <ProjectSearch />
    <ProjectContent />
  </ProjectProvider>
</template>

<script lang="ts" setup>
import type { ProjectCategory } from '~~/packages/schema/src/types.ts'

definePageMeta({
  layout: 'content',
})

const route = useRoute()
const category = computed(() => route.params.category as ProjectCategory)

if (!projectCategoryIds.includes(category.value)) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = computed(() => projectCategoryMetadata.find(({ id }) => id === category.value)?.label ?? '')
</script>
