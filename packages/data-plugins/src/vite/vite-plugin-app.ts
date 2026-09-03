import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-app',
  description: 'Vite plugin for Vue 3 that supports SSG, SSR, and SPA.',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'vue',
    'vite',
    'vite-ssr',
    'vite-ssg',
    'vite-spa',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kaivanwong/vite-plugin-app',
    npm: 'https://www.npmjs.com/package/vite-plugin-app',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
