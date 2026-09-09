<template>
  <div class="flex items-center">
    <span class="mr-2 text-xs whitespace-nowrap text-muted-foreground font-medium">
      {{ title }}
    </span>
    <Select v-model="selectedValue">
      <SelectTrigger class="w-[180px] bg-background">
        <SelectValue :placeholder="`Select ${title.toLowerCase()}`" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem :value="ALL_OPTION_VALUE">
            All
          </SelectItem>
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

const ALL_OPTION_VALUE = '__all__'

const selectedValue = computed({
  get: () => model.value ?? ALL_OPTION_VALUE,
  set: (value) => {
    model.value = value === ALL_OPTION_VALUE ? undefined : value
  },
})
</script>
