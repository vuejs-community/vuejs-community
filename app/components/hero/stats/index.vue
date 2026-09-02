<template>
  <div class="relative isolate overflow-hidden bg-white border-b border-foreground/20" style="opacity: 1; transform: none;">
    <DotPattern />
    <div
      :class="cn([
        'container',
        'text-[0.625rem] uppercase tracking-wide',
        'flex flex-wrap items-center gap-4 py-4 md:py-5',
      ])"
    >
      <span class="flex flex-1 items-center gap-2 text-foreground">COMMUNITY INDEX</span>
      <span class="flex-1 text-end text-muted-foreground">VUE ECOSYSTEM · {{ year }}</span>
    </div>
  </div>
  <div class="container grid grid-cols-1 md:grid-cols-12">
    <div
      :class="cn([
        'flex flex-col',
        'border-b border-foreground/20',
        'py-6 md:py-12 md:pr-12 lg:py-16 lg:pr-16',
        'md:col-span-7 md:border-r md:border-b-0',
      ])"
    >
      <span class="text-meta text-muted-foreground">ECOSYSTEM · COMMUNITY INDEX</span>
      <div
        :class="cn([
          'flex flex-col text-4xl',
          'leading-[0.95] tracking-tighter text-balance',
          'md:text-6xl lg:text-[5.5rem]',
        ])"
      >
        <span class="mt-3">One ecosystem,</span>
        <em class="text-muted-foreground">finally in one place.</em>
      </div>
      <p class="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg">
        Libraries, modules, plugins, and developer tools are scattered across the Vue ecosystem. Vue Community
        brings them together into one curated place to explore, compare, and discover.
      </p>
    </div>

    <ul class="flex flex-col divide-y divide-foreground/20 md:col-span-5">
      <li class="py-6 md:py-10 md:pl-12 lg:pl-16">
        <div class="font-display text-6xl leading-none tracking-tight md:text-7xl lg:text-8xl">
          217
        </div>
        <div class="text-meta mt-3 text-muted-foreground">
          RESOURCES · ACROSS THE VUE ECOSYSTEM
          <!-- 统计所有 data-xx 的数据总量 -->
        </div>
      </li>
      <li class="bg-foreground py-6 text-background md:py-10 md:pl-12 lg:pl-16">
        <div class="font-display text-6xl leading-none tracking-tight md:text-7xl lg:text-8xl">
          1
        </div>
        <div class="text-meta mt-3 opacity-70">
          PLACE · TO DISCOVER VUE
        </div>
      </li>
      <li class="py-6 md:py-10 md:pl-12 lg:pl-16">
        <div class="font-display text-6xl leading-none tracking-tight md:text-7xl lg:text-8xl">
          12
        </div>
        <div class="text-meta mt-3 text-muted-foreground">
          ECOSYSTEM CATEGORIES
          <!-- 统计有多少个数据分类 -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils.ts'

defineOptions({
  name: 'HeroStatsTwo',
})

const year = new Date().getFullYear()
</script>
