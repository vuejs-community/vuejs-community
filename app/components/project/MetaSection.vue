<template>
  <div class="section-padding border-b">
    <!-- <div class="grid grid-cols-[max-content_1fr] items-start gap-3"> -->
    <div class="grid grid-cols-[1fr] items-start gap-3">
      <!--      <div class="flex h-9 items-center text-sm font-medium text-foreground capitalize"> -->
      <!--        {{ title }} -->
      <!--      </div> -->
      <div class="flex flex-wrap items-center gap-3">
        <Button
          v-for="(option, index) in options"
          :key="`${option}-${index}`"
          :aria-pressed="isMetaSelected(props.type, option)"
          :class="cn([
            'bg-transparent shadow-none capitalize',
            isMetaSelected(props.type, option) ? 'border' : 'border-transparent',
          ])"
          variant="outline"
          @click="toggleMeta(props.type, option)"
        >
          {{ option }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectMetaStatType } from '~~/shared/types/project'
import { cn } from '~/lib/utils.ts'
import { useProjectResourceContext } from '.'

defineOptions({
  name: 'ProjectMetaSection',
})

const props = defineProps<{
  type: ProjectMetaStatType
  title: string
  options: readonly string[]
}>()

const { isMetaSelected, toggleMeta } = useProjectResourceContext()
</script>
