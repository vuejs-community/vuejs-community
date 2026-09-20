import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-app',
  description: 'Vite plugin for Vue 3 that supports SSG, SSR, and SPA.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue',
    'vite',
    'vite-ssr',
    'vite-ssg',
    'vite-spa',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kaivanwong/vite-plugin-app',
    npm: 'https://www.npmjs.com/package/vite-plugin-app',
    website: 'https://github.com/kaivanwong/vite-plugin-app#readme',
  },
  source: {
    github: 'kaivanwong/vite-plugin-app',
    npm: 'vite-plugin-app',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
