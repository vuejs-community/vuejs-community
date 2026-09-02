<template>
  <!-- Header -->
  <header class="border-b border-foreground/20">
    <div class="flex container h-full items-center justify-between py-2">
      <!-- Left -->
      <div class="flex min-w-0 items-center gap-8">
        <NuxtLink
          to="/"
          class="shrink-0"
          aria-label="Vue Community"
        >
          <img
            src="/logo.svg"
            alt="Vue Community"
            class="size-10"
          >
        </NuxtLink>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem v-for="nav in navs" :key="nav.label">
              <NavigationMenuLink as-child>
                <a href="/" class="text-foreground text-sm font-medium capitalize">{{ nav.label }}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <!-- Right -->
      <div class="flex shrink-0 items-center gap-2">
        <GradientButton
          :duration="2900"
          :border-radius="50"
          :border-width="1.5"
          :blur="2"
          bg-color="#302121"
          class="text-muted [&_span]:px-4 [&_span]:py-1"
        >
          <div class="flex items-center gap-3">
            <span class="p-0!">🎉</span>
            <span class="p-0!">Contributing</span>
          </div>
        </GradientButton>

        <Button size="icon" variant="ghost">
          <Icon name="codicon:github-alt" />
        </Button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SiteHeader',
})

const navs = [
  {
    label: 'ui',
    to: '/ui',
  },
  {
    label: 'component',
    to: '/component',
  },
  {
    label: 'vite',
    to: '/vite',
  },
  {
    label: 'plugin',
    to: '/plugin',
  },
  {
    label: 'module',
    to: '/module',
  },
]
</script>
