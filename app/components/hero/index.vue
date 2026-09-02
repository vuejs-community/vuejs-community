<template>
  <section class="relative container isolate flex w-full flex-1 flex-col px-8 pt-32 pb-4">
    <div class="flex-1 flex flex-col justify-between">
      <div class="flex flex-col items-center gap-15">
        <h1 class="flex flex-col items-center text-5xl leading-tight tracking-tighter md:text-7xl">
          <span class="flex items-center gap-4">
            <span class="font-semibold">Discover the</span>
            <span class="font-playfair italic">Vue Ecosystem</span>
          </span>
          <span class="font-semibold text-4xl tracking-tight">Explore, connect, and build the open ecosystem of Vue.<!-- 探索、连接并构建属于 Vue 的开放生态。 --></span>
        </h1>

        <div class="mt-8 flex flex-wrap justify-center items-center gap-3 tracking-tight md:text-xl">
          <span>From<!-- 从 --></span>
          <DefineTemplate v-slot="{ icon, title }">
            <div class="flex items-center">
              <div class="flex size-8 rotate-14 items-center justify-center rounded-lg bg-foreground shadow-xl">
                <Icon :name="icon" />
              </div>
            </div>
            <span>{{ title }}</span>
          </DefineTemplate>
          <ReuseTemplate icon="logos:vue" title="UI & Component" />
          <ReuseTemplate icon="logos:vueuse" title="Composables" />
          <ReuseTemplate icon="logos:nuxt-icon" title="Modules" />
          <ReuseTemplate icon="material-icon-theme:vite" title="Vite" />
          <ReuseTemplate icon="icon:dark-unplugin" title="Unplugin" />
          <span class="text-muted-foreground">Vue Community 将分散的 Vue 生态重新连接起来，为开发者提供一个持续生长的技术发现入口。</span>
        </div>

        <div class="mt-10 flex flex-col items-start gap-3 md:flex-row">
          <Button class="flex h-auto gap-3 rounded-none font-medium md:py-3 md:text-base">
            Explore Ecosystem
            <Icon name="lucide:chevron-right" />
          </Button>
          <div class="flex gap-4">
            <Button class="flex h-auto gap-3 rounded-none font-medium md:px-5 md:py-3 md:text-base" variant="outline">
              Contributing
            </Button>
            <svg fill="none" height="36" viewBox="0 0 83 36" width="83" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40.54 19.8917L41.3058 20.5348L40.54 19.8917ZM1.63581 24.9844C1.0855 25.0311 0.677219 25.515 0.723883 26.0653L1.48433 35.0331C1.53099 35.5834 2.01493 35.9917 2.56524 35.9451C3.11555 35.8984 3.52384 35.4144 3.47717 34.8641L2.80123 26.8927L10.7726 26.2168C11.3229 26.1701 11.7312 25.6862 11.6845 25.1359C11.6379 24.5856 11.1539 24.1773 10.6036 24.2239L1.63581 24.9844ZM82.2736 5.64287C76.5724 3.44962 72.1116 1.90993 68.3792 1.17068C64.6243 0.426972 61.5404 0.479043 58.619 1.52454C55.7174 2.56298 53.0827 4.54437 50.1573 7.45564C47.236 10.3628 43.9495 14.2763 39.7742 19.2487L41.3058 20.5348C45.5032 15.5361 48.7246 11.703 51.5681 8.87328C54.4074 6.04765 56.7943 4.30177 59.2929 3.40759C61.7717 2.52047 64.4665 2.43457 67.9906 3.13257C71.5372 3.83502 75.8555 5.3167 81.5555 7.50951L82.2736 5.64287ZM39.7742 19.2487C31.6752 28.8938 24.4557 32.0798 18.3123 32.0962C12.1277 32.1127 6.75778 28.9224 2.36514 25.2165L1.07548 26.7451C5.60504 30.5666 11.4303 34.1146 18.3177 34.0962C25.2462 34.0777 32.9755 30.4554 41.3058 20.5348L39.7742 19.2487Z"
                fill="black"
              />
            </svg>
            <p class="-ml-3 tracking-tight">
              Just do it
            </p>
          </div>
        </div>
      </div>
      <div class="relative">
        <ClientOnly>
          <Vue3Marquee
            :duration="60"
            :pause-on-hover="true"
            class="py-4 pt-8 overflow-hidden"
          >
            <ul class="relative flex items-center overflow-hidden w-full">
              <li
                v-for="item in items"
                :key="item.label"
                class="relative mx-8 flex-1 w-20"
              >
                <div class="flex flex-col items-center gap-3">
                  <Icon :name="item.icon" size="40" />
                  <!--                  <span class="font-semibold text-sm whitespace-nowrap">{{ item.name }}</span> -->
                </div>
              </li>
            </ul>
          </Vue3Marquee>
        </ClientOnly>
        <div class="bg-linear-to-r from-page absolute inset-y-0 left-0 w-12 to-transparent" />
        <div class="bg-linear-to-l from-page absolute inset-y-0 right-0 w-12 to-transparent" />
      </div>

      <!-- -->
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HeroIndex',
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

const items = [
  {
    label: 'vue',
    icon: 'logos:vue',
  },
  {
    label: 'element-plus',
    icon: 'icon:element-plus',
  },
  {
    label: 'naiveui',
    icon: 'icon:naiveui',
  },
  {
    label: 'ant-design',
    icon: 'logos:ant-design',
  },
  {
    label: 'vueuse',
    icon: 'logos:vueuse',
  },
  {
    label: 'nuxt',
    icon: 'logos:nuxt-icon',
  },
  {
    label: 'ant-design-vue',
    icon: 'icon:ant-design-vue',
  },
  {
    label: 'reka-ui',
    icon: 'icon:reka-ui',
  },
  {
    label: 'arco-vue',
    icon: 'icon:arco',
  },
  {
    label: 'daisyui',
    icon: 'icon:daisyui',
  },
  {
    label: 'vite',
    icon: 'logos:vite-icon',
  },
  {
    label: 'vite-devtools',
    icon: 'icon:vite-devtools',
  },
  {
    label: 'vue-pinia',
    icon: 'logos:pinia',
  },
  {
    label: 'inspira-ui',
    icon: 'icon:inspira-ui',
  },
]
</script>
