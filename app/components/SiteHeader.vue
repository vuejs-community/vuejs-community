<template>
  <!-- Header -->
  <header class="border-b">
    <div class="flex px-6 h-full items-center justify-between py-2">
      <!-- Left -->
      <div class="flex min-w-0 items-center gap-8">
        <NuxtLink
          aria-label="Vue Community"
          class="shrink-0"
          to="/"
        >
          <img
            alt="Vue Community"
            class="size-10"
            src="/logo.svg"
          >
        </NuxtLink>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem v-for="nav in navs" :key="nav.label">
              <NavigationMenuLink as-child>
                <NuxtLink class="text-foreground text-sm font-medium capitalize" :to="nav.to">
                  {{ nav.label }}
                </NuxtLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <!-- Right -->
      <div class="flex shrink-0 items-center gap-2">
        <Button as-child size="icon-sm" variant="ghost">
          <NuxtLink to="/llms.txt" target="_blank">
            <Icon name="bi:robot" />
          </NuxtLink>
        </Button>

        <Button as-child size="icon-sm" variant="ghost">
          <NuxtLink :to="app.github" target="_blank">
            <Icon name="codicon:github-alt" />
          </NuxtLink>
        </Button>

        <Button as-child size="icon-sm" variant="ghost">
          <NuxtLink :to="app.discord" target="_blank">
            <Icon name="akar-icons:discord-fill" />
          </NuxtLink>
        </Button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'SiteHeader',
})

const navs = [
  {
    label: 'UI',
    to: '/ui',
  },
  {
    label: 'components',
    to: '/component',
  },
  {
    label: 'hooks',
    to: '/hooks',
  },
  {
    label: 'plugins',
    to: '/plugin',
  },
  {
    label: 'modules',
    to: '/nuxt',
  },
  {
    label: 'admin',
    to: '/admin',
  },
  {
    label: 'uniapp',
    to: '/uniapp',
  },
]

const { app } = useAppConfig()
</script>
