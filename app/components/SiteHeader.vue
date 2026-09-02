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

        <nav class="hidden items-center gap-6 md:flex">
          <NuxtLink to="/">
            Home
          </NuxtLink>

          <NuxtLink to="/ui">
            UI
          </NuxtLink>

          <NuxtLink to="/vite">
            Vite Plugin
          </NuxtLink>

          <NuxtLink to="/nuxt">
            Nuxt
          </NuxtLink>
        </nav>
      </div>

      <!-- Right -->
      <div class="flex shrink-0 items-center gap-2">
        <Button class="hidden sm:inline-flex" variant="outline">
          Contributing
        </Button>

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
</script>

<style scoped>

</style>
