<template>
  <SiteSection>
    <HeroIndex />
    <FeatureHome />
    <SiteCta class="border-x" />
  </SiteSection>
</template>

<script lang="ts" setup>
import FeatureHome from '~/components/features/home.vue'
import HeroIndex from '~/components/hero/index.vue'
import SiteSection from '~/SiteSection.vue'

useHead({
  title: 'Vue Community — Discover the Vue Ecosystem',
  meta: [
    {
      name: 'description',
      content: 'Discover Vue libraries, UI components, composables, Nuxt modules, Vite plugins, and developer tools in one open, community-driven ecosystem.',
    },
  ],
})

definePageMeta({
  layout: 'custom',
})
</script>
