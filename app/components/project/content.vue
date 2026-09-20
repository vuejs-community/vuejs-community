<template>
  <div
    v-if="status === 'success'"
    class="border-b px-6 py-3 text-sm text-muted-foreground md:px-8 lg:px-10"
    aria-live="polite"
  >
    {{ total.toLocaleString() }} {{ total === 1 ? 'project' : 'projects' }} found
  </div>

  <div
    v-if="projects.length > 0"
    :class="cn([
      'relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      'after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border',
      '[&>*]:border-b md:max-lg:[&>*:nth-child(odd)]:border-r lg:[&>*:nth-child(3n+2)]:border-x',
    ])"
  >
    <CardUiComponent
      v-for="project in projects"
      :key="project.name"
      :project="project"
    />
  </div>

  <div
    v-else-if="isInitialLoading"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [&>*]:border-b md:max-lg:[&>*:nth-child(odd)]:border-r lg:[&>*:nth-child(3n+2)]:border-x"
    aria-label="Loading projects"
    aria-live="polite"
  >
    <div
      v-for="index in 6"
      :key="index"
      class="h-52 animate-pulse bg-muted/40"
    />
  </div>

  <div v-else-if="error" class="p-6 md:p-8 lg:p-10 border-b text-center">
    <p class="text-destructive">
      Failed to load projects. Please try again.
    </p>
    <Button class="mt-4 rounded-none" variant="outline" @click="refresh">
      Retry
    </Button>
  </div>

  <div v-else-if="isEmpty" class="p-10 border-b text-center md:p-14">
    <h2 class="font-semibold tracking-tight">
      No projects found
    </h2>
    <p class="mt-2 text-sm text-muted-foreground">
      Try another search term or remove a filter.
    </p>
  </div>

  <div v-if="error && projects.length > 0" class="border-b p-6 text-center">
    <p class="text-sm text-destructive">
      The next page could not be loaded.
    </p>
    <Button class="mt-4 rounded-none" variant="outline" @click="loadMore">
      Retry
    </Button>
  </div>

  <div v-if="hasMore && !error" class="p-6 md:p-8 lg:p-10 border-b">
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

<script setup lang="ts">
import { cn } from '~/lib/utils'
import { useProjectResourceContext } from '.'

defineOptions({
  name: 'ProjectContent',
})

const {
  projects,
  total,
  hasMore,
  isLoadingMore,
  status,
  error,
  loadMore,
  refresh,
} = useProjectResourceContext()

const isInitialLoading = computed(() => status.value === 'pending' && projects.value.length === 0)
const isEmpty = computed(() => status.value === 'success' && projects.value.length === 0 && !error.value)
</script>
