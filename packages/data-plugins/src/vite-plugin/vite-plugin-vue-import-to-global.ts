import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-import-to-global',
  description: 'Use Vue from window.Vue instead of bundling it',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue-cdn',
    'micro-frontend',
    'vue-import-to-global',
  ],
  source: {
    npm: 'vite-plugin-vue-import-to-global',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-import-to-global',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 8,
    },
  },
})
