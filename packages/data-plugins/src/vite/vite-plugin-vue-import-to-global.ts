import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-import-to-global',
  description: 'Use Vue from window.Vue instead of bundling it',
  version: '1.0.61',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue-cdn',
    'micro-frontend',
    'vue-import-to-global',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-import-to-global',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
