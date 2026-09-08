<template>
  <div class="relative section-padding hover:bg-neutral-50">
    <div class="flex flex-col justify-between gap-6">
      <div class="flex items-center gap-3">
        <Icon :name="project.icon || 'lucide:mosque'" size="38" />
        <span class="text-xl font-medium leading-snug tracking-tighter">{{ project.name }}</span>
      </div>
      <p class="text-sm text-muted-foreground leading-relaxed">
        {{ project.description }}
      </p>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-2 text-muted-foreground text-sm font-medium"><Icon name="lucide:download" />{{ formatCount(project.downloads_monthly) }}</span>
            <span class="flex items-center gap-2 text-muted-foreground text-sm font-medium"><Icon name="lucide:star" />{{ formatCount(project.stars) }}</span>
          </div>
          <Button v-if="project.github" as-child variant="ghost" size="icon">
            <NuxtLink :to="project.github" target="_blank" rel="noopener noreferrer" :aria-label="`${project.name} on GitHub`">
              <Icon name="lucide:github" />
            </NuxtLink>
          </Button>
          <Button v-if="project.npm" as-child variant="ghost" size="icon">
            <NuxtLink :to="project.npm" target="_blank" rel="noopener noreferrer" :aria-label="`${project.name} on npm`">
              <Icon name="devicon:npm" />
            </NuxtLink>
          </Button>
        </div>
        <!--        <Button class="bg-foreground/20 rounded-none"> -->
        <!--          39 components -->
        <!--        </Button> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatCount } from '#shared/utils/format.ts'

defineOptions({
  name: 'CardUIComponent',
})

defineProps<{
  project: ProjectRecord
}>()
</script>
