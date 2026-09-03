<template>
  <SiteSection>
    <Hero />
    <FeaturesHome />
    <SiteCta class="border-x" />
  </SiteSection>
</template>

<script lang="ts" setup>
import SiteSection from '~/components/SiteSection.vue'

useHead({
  title: 'Vue Community — Discover the Vue Ecosystem',
  meta: [
    {
      name: 'description',
      content: 'Discover Vue libraries, UI components, composables, Nuxt modules, Vite plugins, and developer tools in one open, community-driven ecosystem.',
    },
  ],
})
</script>
