<template>
  <div
    class="relative flex h-full w-full flex-col items-center justify-center"
  >
    <span class="bg-background rounded-full p-8 flex items-center">
      <Icon class="size-28" name="logos:vue" size="48" />
    </span>

    <Orbit
      v-for="(item, index) in innerLibraries"
      :key="item.name"
      :delay="orbitDelay(index, innerLibraries.length, 16)"
      :direction="ORBIT_DIRECTION.CounterClockwise"
      :duration="16"
      :radius="250"
      :path="index === 0"
      class="items-center justify-center border-none"
    >
      <div class="flex items-center bg-background gap-2.5 px-2 py-1 rounded-full border">
        <Icon :name="item.icon" />
        <span class="font-mono text-foreground">{{ item.name }}</span>
      </div>
    </Orbit>

    <Orbit
      v-for="(item, index) in outerLibraries"
      :key="item.name"
      :duration="32"
      :delay="orbitDelay(index, outerLibraries.length, 32)"
      :direction="ORBIT_DIRECTION.Clockwise"
      :radius="150"
      :path="index === 0"
      class="items-center justify-center border-none"
    >
      <div class="flex items-center bg-background gap-2.5 px-2 py-1 rounded-full border">
        <Icon :name="item.icon" />
        <span class="font-mono text-foreground">{{ item.name }}</span>
      </div>
    </Orbit>
  </div>
</template>

<script lang="ts" setup>
import { Orbit, ORBIT_DIRECTION } from '~/components/ui/orbit'

defineOptions({
  name: 'UiPreviews',
})

const outerLibraries = [
  {
    name: 'PrimeVue',
    icon: 'simple-icons:primevue',
  },
  {
    name: 'Volt UI',
    icon: 'vscode-icons:file-type-volt',
  },
  {
    name: 'TDesign',
    icon: 'simple-icons:tencentqq',
  },
  {
    name: 'Reka UI',
    icon: 'thesvg-color:reka-ui',
  },
]

const innerLibraries = [
  {
    name: 'Shadcn Vue',
    icon: 'hugeicons:shadcn-square',
  },
  {
    name: 'Ant Design Vue',
    icon: 'logos:ant-design',
  },
  {
    name: 'Reka UI',
    icon: 'thesvg-color:reka-ui',
  },
  {
    name: 'Naive UI',
    icon: 'icon:naiveui',
  },
  {
    name: 'Daisy UI',
    icon: 'icon:daisyui',
  },
  {
    name: 'Element Plus',
    icon: 'logos:element',
  },
  {
    name: 'TDesign',
    icon: 'simple-icons:tencentqq',
  },
  {
    name: 'Arco UI',
    icon: 'icon:arco',
  },
]

function orbitDelay(index: number, total: number, duration: number) {
  return index * duration / total
}
</script>
