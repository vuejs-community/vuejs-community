<template>
  <footer class="relative flex min-h-dvh w-full flex-col pt-32">
    <div
      :class="cn([
        'container',
        'flex flex-1 flex-col items-center justify-center gap-8',
        'text-center sm:px-6 lg:px-8 px-4 py-8',
      ])"
    >
      <a href="#" class="flex items-center gap-2.5">
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
      </a>
      <span class="max-w-xl text-2xl font-medium tracking-tight sm:text-3xl">
        Explore, connect, and build the open ecosystem of Vue.
      </span>
      <nav class="text-muted-foreground flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium">
        <a href="#" class="hover:text-foreground transition-colors">Ui Library</a>
        <a href="#" class="hover:text-foreground transition-colors">Company</a>
        <a href="#" class="hover:text-foreground transition-colors">Features</a>
        <a href="#" class="hover:text-foreground transition-colors">Modules</a>
        <a href="#" class="hover:text-foreground transition-colors">Vite</a>
        <a href="#" class="hover:text-foreground transition-colors">Plugin</a>
        <a href="#" class="hover:text-foreground transition-colors">Github</a>
      </nav>
      <p class="text-muted-foreground w-full border-t pt-6 text-xs font-normal">
        &copy; 2026 Vue.Community Inc. All rights reserved. Constructed based on Shadcn/Vue & Tailwindcss
      </p>
    </div>

    <div class="relative flex shrink-0 items-end justify-center overflow-hidden px-6 pt-6 text-zinc-950 sm:pt-8 md:pt-14">
      <p class="text-center font-sans font-bold tracking-tighter select-none text-shadow-xs md:translate-y-8 text-[12vw] text-zinc-950 pointer-events-none leading-none opacity-5">
        Vue.Community
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils.ts'

defineOptions({
  name: 'SiteFooter',
})
</script>
