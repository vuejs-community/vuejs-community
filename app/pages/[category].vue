<template>
  <div class="hidden p-7.5 md:block" />
  <PageHeader :title="meta.label" :description="meta.description" />

  <ProjectProvider :category="category">
    <ProjectSearch />
    <ProjectContent />
  </ProjectProvider>
</template>

<script lang="ts" setup>
import type { ProjectCategory } from '@vuejs-community/schema'
import { projectCategories } from '@vuejs-community/schema'

definePageMeta({
  layout: 'content',
  validate: route => typeof route.params.category === 'string'
    && projectCategories.includes(route.params.category as ProjectCategory),
})

const route = useRoute()
const category = computed(() => route.params.category as ProjectCategory)
const meta = computed(() => projectCategoryMetadata.find(({ id }) => id === category.value) ?? { label: '', description: '' })
const canonicalUrl = computed(() => new URL(route.path, SITE_URL).toString())

useSeoMeta({
  title: () => `${meta.value.label} — Vue Community`,
  description: () => meta.value.description,
  ogTitle: () => `${meta.value.label} — Vue Community`,
  ogDescription: () => meta.value.description,
  ogType: 'website',
  ogUrl: () => canonicalUrl.value,
  twitterCard: 'summary',
  twitterTitle: () => `${meta.value.label} — Vue Community`,
  twitterDescription: () => meta.value.description,
})

useHead(() => ({
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
  ],
}))
</script>
