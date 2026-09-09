<template>
  <ProjectMetaSection
    v-for="section in sections"
    :key="section.type"
    :type="section.type"
    :title="section.title"
    :options="section.options"
  />
</template>

<script setup lang="ts">
import { useProjectResourceContext } from '.'

defineOptions({
  name: 'ProjectSearch',
})

const metaSectionLabels: Record<ProjectMetaStatType, string> = {
  types: 'Type',
  tags: 'Tag',
}

const metaTypes: ProjectMetaStatType[] = ['types']

const { category } = useProjectResourceContext()
const { data: meta } = await useProjectMeta(category)

const sections = computed(() => metaTypes
  .map(type => ({
    type,
    title: metaSectionLabels[type],
    options: meta.value[type].map(({ value }) => value),
  }))
  .filter(({ options }) => options.length > 0))
</script>
