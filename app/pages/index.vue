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
</template>

<script lang="ts" setup>
import HeroIndex from '~/components/hero/index.vue'
import SiteSection from '~/SiteSection.vue'
</script>
