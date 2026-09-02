<template>
  <div class="container py-14 sm:px-8 sm:py-16">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-4">
        <span class="text-2xl font-semibold tracking-tight text-highlighted sm:text-3xl">
          Help grow the Vue ecosystem.
        </span>
        <p class="text-base text-muted-foreground">
          Know a great Vue resource we're missing? Share it with the community by contributing to our GitHub repository.
        </p>
      </div>
      <div>
        <Button variant="outline" class="rounded-none" as-child>
          <a
            href="https://github.com/vuejs-community/vuejs-community"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3"
          >
            Contribute on GitHub
            <Icon name="lucide:arrow-right" size="20" />
          </a>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SiteCta',
})
</script>
