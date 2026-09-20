<script setup lang="ts">
defineOptions({
  name: 'CtaContent',
})

const { app } = useAppConfig()
</script>

<template>
  <div class="p-6 md:p-8 lg:p-10 space-y-6">
    <h3 class="font-semibold leading-snug tracking-tighter md:text-xl">
      Built with the community
    </h3>
    <p class="text-muted-foreground leading-relaxed">
      Found something missing? Add a project, improve existing data, or help make Vue Community better for everyone.
    </p>
    <div class="flex gap-3 md:gap-6">
      <Button as-child variant="default" class="rounded-none">
        <NuxtLink :to="app.github" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3">
          <Icon name="lucide:github" />
          Contributing
        </NuxtLink>
      </Button>
      <Button as-child variant="outline" class="rounded-none">
        <NuxtLink :to="app.discord" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3">
          <Icon name="akar-icons:discord-fill" />
          Discord
        </NuxtLink>
      </Button>
    </div>
  </div>
</template>
