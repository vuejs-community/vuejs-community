<template>
  <footer class="relative border-t">
    <div class="container flex w-full flex-col border-x">
      <div class="relative isolate overflow-hidden">
        <div
          :class="cn([
            'container',
            'text-[0.625rem] tracking-wide',
            'flex flex-wrap items-center gap-4 py-4 md:py-5',
          ])"
        >
          <span class="flex flex-1 items-center gap-2 text-foreground">&copy; 2026 Vue.Community</span>
          <span class="flex-1 text-end text-muted-foreground">made with ❤️‍🔥 by lonewolfyx</span>
        </div>
      </div>
      <div
        :class="cn([
          'container',
          'flex flex-1 flex-col items-center justify-center gap-8',
          'text-center sm:px-6 lg:px-8 px-4 py-8',
        ])"
      >
        <NuxtLink to="/" class="flex items-center gap-2.5" aria-label="Vue Community home">
          <div
            :class="cn([
              'bg-foreground text-primary-foreground',
              'flex size-9 shrink-0 items-center justify-center',
              'rounded-md text-sm font-medium rotate-14',
            ])"
          >
            <Icon name="logos:vue" />
          </div>
          <span class="text-lg font-medium tracking-tight">Community</span>
        </NuxtLink>
        <span class="max-w-xl text-2xl font-medium tracking-tight sm:text-3xl">
          Explore, connect, and build the open ecosystem of Vue.
        </span>
        <nav class="text-muted-foreground flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium">
          <NuxtLink
            v-for="link in footerLinks"
            :key="link.label"
            :to="link.to"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="hover:text-foreground transition-colors capitalize"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        <p class="text-muted-foreground w-full border-t pt-6 text-xs font-normal">
          Constructed based on Nuxt & Shadcn/Vue & Tailwindcss
        </p>
      </div>

      <div class="relative flex shrink-0 items-end justify-center overflow-hidden px-6 pt-6 text-zinc-950 sm:pt-8 md:pt-32">
        <p class="text-center font-sans font-bold tracking-tighter select-none text-shadow-xs md:translate-y-8 text-[12vw] text-zinc-950 pointer-events-none leading-none opacity-5">
          Vue.Community
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils.ts'

defineOptions({
  name: 'SiteFooter',
})

const { app } = useAppConfig()
const footerLinks = [
  { label: 'UI Libraries', to: '/ui' },
  { label: 'Components', to: '/component' },
  { label: 'Composables', to: '/hooks' },
  { label: 'Nuxt Modules', to: '/nuxt' },
  { label: 'Plugins', to: '/plugin' },
  { label: 'GitHub', to: app.github, external: true },
]
</script>
