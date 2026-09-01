<template>
  <div class="flex w-full bg-background text-foreground items-center justify-center border-y border-foreground/10">
    <section class="py-32 w-full">
      <div class="container mx-auto">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div class="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
              <h1 class="mb-5 text-4xl font-semibold text-pretty">
                One Ecosystem, Thousands of Possibilities
              </h1>
              <p class="text-muted-foreground">
                Discover the libraries, modules, plugins, and tools powering modern Vue development.
              </p>
            </div>
            <div class="mt-12 flex justify-center gap-7 lg:justify-start">
              <div class="flex flex-col gap-1.5">
                <p class="text-2xl font-bold text-foreground sm:text-3xl">
                  18
                </p>
                <p class="text-muted-foreground">
                  Explore every corner of Vue.
                </p>
              </div>
              <Separator orientation="vertical" />
              <div class="flex flex-col gap-1.5">
                <p class="text-2xl font-bold text-foreground sm:text-3xl">
                  10+
                </p>
                <p class="text-muted-foreground">
                  Built by teams across open source.
                </p>
              </div>
            </div>
          </div>

          <div class="grid gap-2.5 text-left sm:grid-cols-2 sm:text-center lg:text-left">
            <div class="flex items-center gap-5 rounded-lg border border-border bg-muted p-6 sm:flex-col sm:items-start sm:p-7">
              <Icon name="logos:vue" size="32" class="mx-0 sm:mx-auto lg:mx-0" />
              <div class="flex flex-col gap-1">
                <p class="text-sm font-semibold text-foreground sm:text-base">
                  UI Libraries
                </p>
                <p class="text-sm text-muted-foreground sm:text-base">
                  Component libraries and design systems for every Vue experience.
                </p>
              </div>
            </div><div class="flex items-center gap-5 rounded-lg border border-border bg-muted p-6 sm:flex-col sm:items-start sm:p-7">
              <Icon name="logos:nuxt-icon" size="32" class="mx-0 sm:mx-auto lg:mx-0" />
              <div class="flex flex-col gap-1">
                <p class="text-sm font-semibold text-foreground sm:text-base">
                  Nuxt Modules
                </p>
                <p class="text-sm text-muted-foreground sm:text-base">
                  Powerful integrations that extend and enhance your Nuxt applications.
                </p>
              </div>
            </div><div class="flex items-center gap-5 rounded-lg border border-border bg-muted p-6 sm:flex-col sm:items-start sm:p-7">
              <Icon name="thesvg-color:vite" size="32" class="mx-0 sm:mx-auto lg:mx-0" />
              <div class="flex flex-col gap-1">
                <p class="text-sm font-semibold text-foreground sm:text-base">
                  Vite Plugins
                </p><p class="text-sm text-muted-foreground sm:text-base">
                  Extend Vite with faster workflows, transformations, and integrations.
                </p>
              </div>
            </div><div class="flex items-center gap-5 rounded-lg border border-border bg-muted p-6 sm:flex-col sm:items-start sm:p-7">
              <Icon name="unjs:unplugin" size="32" class="mx-0 sm:mx-auto lg:mx-0" />
              <div class="flex flex-col gap-1">
                <p class="text-sm font-semibold text-foreground sm:text-base">
                  Unplugin Ecosystem
                </p><p class="text-sm text-muted-foreground sm:text-base">
                  Universal plugins that work across Vite, Rollup, Webpack, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- -->
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Separator } from '~/components/ui/separator'

defineOptions({
  name: 'HeroStats',
})
</script>
