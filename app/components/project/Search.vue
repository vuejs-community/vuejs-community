<template>
  <div class="relative w-full container section-padding-x border-b py-4">
    <DotPattern class="[--background:var(--foreground)]" />
    <div class="relative flex items-center gap-4">
      <div class="relative">
        <InputGroup class="bg-background w-[220px] lg:w-[280px]">
          <InputGroupInput
            v-model="keyword"
            type="search"
            aria-label="Search projects"
            placeholder="Search..."
          />
          <InputGroupAddon>
            <Icon name="lucide:search" />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <ProjectMetaSelect
        v-for="section in sections"
        :key="section.type"
        v-model="selectedMeta[section.type]"
        :title="section.title"
        :options="section.options"
      />
    </div>
  </div>
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

const metaTypes: ProjectMetaStatType[] = ['types', 'tags']

const { category, keyword, selectedMeta } = useProjectResourceContext()
const { data: meta } = await useProjectMeta(category)

const sections = computed(() => metaTypes
  .map(type => ({
    type,
    title: metaSectionLabels[type],
    options: meta.value[type].map(({ value }) => value),
  }))
  .filter(({ options }) => options.length > 0))
</script>
