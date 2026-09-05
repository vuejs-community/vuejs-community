import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vueuse-motion',
  description: 'Vue 组合式动画库，提供 v-motion 指令与 composables 驱动组件动效',
  category: 'hooks',
  types: ['animation', 'composable-library'],
  tags: ['hooks', 'composables', 'animation', 'motion', 'vue3'],

  source: {
    github: 'vueuse/motion',
    npm: '@vueuse/motion',
  },

  links: {
    github: 'https://github.com/vueuse/motion',
    npm: 'https://www.npmjs.com/package/@vueuse/motion',
    website: 'https://motion.vueuse.org',
  },

  stats: {
    stars: 2759,
    downloads: {
      monthly: 701379,
      weekly: 175547,
    },
  },
})
