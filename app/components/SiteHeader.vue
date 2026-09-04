<template>
  <!-- Header -->
  <header class="border-b">
    <div class="flex px-6 h-full items-center justify-between py-2">
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
        <Button size="icon-sm" variant="ghost" as-child>
          <NuxtLink target="_blank" :to="app.github">
            <Icon name="codicon:github-alt" />
          </NuxtLink>
        </Button>

        <Button size="icon-sm" variant="ghost" as-child>
          <NuxtLink target="_blank" :to="app.discord">
            <Icon name="akar-icons:discord-fill" />
          </NuxtLink>
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
    label: 'UI',
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

const { app } = useAppConfig()
</script>
