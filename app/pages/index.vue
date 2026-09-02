<template>
  <div class="flex min-h-dvh flex-col">
    <SiteHeader class="shrink-0 border-b-0" />
    <HeroIndex class="flex-1" />
  </div>
  <SiteSection class="border-y border-foreground/20">
    <HeroStats />
  </SiteSection>
  <SiteSection>
    <HeroEcoSystem />
  </SiteSection>
  <SiteSection class="bg-white border-t border-foreground/20">
    <DotPattern />
    <SiteCta />
  </SiteSection>
</template>

<script lang="ts" setup>
import HeroIndex from '~/components/hero/index.vue'
import SiteCta from '~/components/SiteCta.vue'
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
</script>
