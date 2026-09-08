<template>
  <div class="hidden p-7.5 md:block" />
  <div class="p-6 md:p-8 lg:p-10 border-b">
    <h1 class="font-semibold text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
      {{ title }}
    </h1>
  </div>

  <div class="p-6 md:p-8 lg:p-10 border-b hidden">
    <span>search options</span>
  </div>

  <div
    :class="cn([
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      '[&>*]:border-b md:max-lg:[&>*:nth-child(odd)]:border-r lg:[&>*:nth-child(3n+2)]:border-x',
    ])"
  >
    <CardUiComponent
      v-for="project in projects"
      :key="project.name"
      :project="project"
    />
  </div>

  <div v-if="error" class="p-6 md:p-8 lg:p-10 border-b text-center text-destructive">
    Failed to load projects. Please try again.
  </div>

  <div v-if="hasMore" class="p-6 md:p-8 lg:p-10 border-b">
    <div class="flex justify-center items-center">
      <Button
        class="rounded-none"
        variant="outline"
        :disabled="isLoadingMore"
        @click="loadMore"
      >
        {{ isLoadingMore ? 'Loading...' : 'View More' }}
        <Icon v-if="!isLoadingMore" name="lucide:arrow-down" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectCategory } from '~~/packages/schema/src/types.ts'
import { cn } from '~/lib/utils.ts'

definePageMeta({
  layout: 'content',
})

const route = useRoute()
const category = computed(() => route.params.category as ProjectCategory)

if (!projectCategoryIds.includes(category.value)) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = computed(() => projectCategoryMetadata.find(({ id }) => id === category.value)?.label)

const {
  projects,
  hasMore,
  isLoadingMore,
  error,
  loadMore,
} = await useProjects({ category: category.value })
</script>
