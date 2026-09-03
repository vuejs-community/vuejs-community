<template>
  <div class="relative border-b">
    <div class="relative w-full container bg-foreground px-0 border-x border-t">
      <DotPattern />
      <div class="relative px-6 py-14 sm:py-28">
        <div class="flex justify-center flex-col items-center">
          <span class="font-medium text-3xl text-muted tracking-tight sm:text-4xl md:text-5xl">Built for the Vue Ecosystem</span>
          <p class="text-muted/50 text-2xl leading-relaxed">
            Everything you need to discover, explore, and navigate the Vue ecosystem — all in one place
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="relative border-b">
    <div class="relative container px-0 border-x">
      <div class="relative grid grid-cols-1 gap-px md:grid-cols-2">
        <DefineTemplate v-slot="{ icon, title, description }">
          <div
            class=""
            :class="cn([
              'relative flex flex-col justify-between overflow-hidden',
              'border-b px-6 py-12 last:border-b-0',
              'md:odd:border-r md:nth-last-2:border-b-0',
            ])"
          >
            <div
              class=""
              :class="cn([
                'relative z-10 flex items-center',
                'pt-4 pb-6',
                '[&amp;_svg]:size-5 [&amp;_svg]:text-primary',
              ])"
            >
              <Icon :name="icon" size="24" />
            </div>
            <div class="relative z-10 space-y-2">
              <span class="font-medium text-foreground text-lg">{{ title }}</span>
              <p class="text-muted-foreground text-xs leading-relaxed">
                {{ description }}
              </p>
            </div>
          </div>
        </DefineTemplate>
        <ReuseTemplate
          v-for="item in features"
          :key="item.title"
          :description="item.description"
          :icon="item.icon"
          :title="item.title"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils.ts'

defineOptions({
  name: 'FeatureHome',
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

const features = [
  {
    icon: 'lucide:command',
    title: 'Everything Vue, One Place',
    description: 'UI libraries, Nuxt modules, Vite plugins, composables, tools, and resources — brought together in one place.',
  },
  {
    icon: 'lucide:search',
    title: 'Discover What Matters',
    description: 'Explore the Vue ecosystem through structured categories and find the right project for your next idea.',
  },
  {
    icon: 'lucide:diamond',
    title: 'Curated for Developers',
    description: 'Discover useful and active community projects without digging through countless repositories.',
  },
  {
    icon: 'lucide:brush',
    title: 'Growing with Vue',
    description: 'A living index of the Vue ecosystem that evolves alongside the community.',
  },
]
</script>
