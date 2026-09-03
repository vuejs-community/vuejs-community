<template>
  <div class="relative section-padding hover:bg-neutral-50">
    <div class="flex flex-col justify-between gap-6">
      <div class="flex items-center gap-3">
        <Icon name="icon:element-plus" size="38" />
        <span class="text-xl font-medium leading-snug tracking-tighter capitalize">element plus</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div
          v-for="item in metaDataSchemaFilters"
          :key="item.label"
          class="flex-1 text-xs text-muted-foreground"
        >
          <div class="flex items-center gap-2">
            <Icon :name="item.icon" />
            {{ item.label }}
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-2 text-muted-foreground text-sm font-medium"><Icon name="lucide:download" />20</span>
            <span class="flex items-center gap-2 text-muted-foreground text-sm font-medium"><Icon name="lucide:star" />20</span>
          </div>
          <Button variant="ghost" size="icon">
            <Icon name="lucide:github" />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="devicon:npm" />
          </Button>
        </div>
        <Button class="bg-foreground/20 rounded-none">
          39 components
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { metaDataSchemaFilters } from '~~/packages/schema'

defineOptions({
  name: 'CardComponent',
})
</script>
