<template>
  <div class="flex items-center">
    <span class="mr-2 text-xs whitespace-nowrap text-muted-foreground font-medium">
      {{ title }}
    </span>
    <Select v-model="model">
      <SelectTrigger class="w-[180px] bg-background">
        <SelectValue :placeholder="`Select ${title.toLowerCase()}`" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="option in options"
            :key="option"
            :value="option"
          >
            {{ option }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ProjectMetaSelect',
})

defineProps<{
  title: string
  options: readonly string[]
}>()

const model = defineModel<string>()
</script>
