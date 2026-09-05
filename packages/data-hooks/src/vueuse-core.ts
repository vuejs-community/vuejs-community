import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vueuse-core',
  description: '事实标准级的 Vue 组合式工具集，300+ 开箱即用的 composables，并提供 router / rxjs / integrations 等官方子包',
  category: 'hooks',
  types: ['composable-library'],
  tags: ['hooks', 'composables', 'vue3', 'vueuse'],

  source: {
    github: 'vueuse/vueuse',
    npm: '@vueuse/core',
  },

  links: {
    github: 'https://github.com/vueuse/vueuse',
    npm: 'https://www.npmjs.com/package/@vueuse/core',
    website: 'https://vueuse.org',
  },

  stats: {
    stars: 22342,
    downloads: {
      monthly: 41602711,
      weekly: 10957061,
    },
  },
})
