<template>
  <div class="hidden p-7.5 md:block" />
  <div class="p-6 md:p-8 lg:p-10 border-b">
    <h1 class="font-semibold text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
      UI Libraries
    </h1>
  </div>

  <div class="p-6 md:p-8 lg:p-10 border-b">
    <span>search options</span>
  </div>

  <div
    :class="cn([
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      '[&>*]:border-b md:max-lg:[&>*:nth-child(odd)]:border-r lg:[&>*:nth-child(3n+2)]:border-x',
    ])"
  >
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
  </div>

  <div class="p-6 mdp-8 lg:p-10 border-b">
    <div class="flex justify-center items-center">
      <Button class="rounded-none" variant="outline">
        View All
        <Icon name="lucide:arrow-right" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils.ts'

definePageMeta({
  layout: 'content',
})
</script>
