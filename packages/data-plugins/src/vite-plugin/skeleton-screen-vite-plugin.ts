import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'skeleton-screen-vite-plugin',
  description: 'A Vite plugin that automatically generates skeleton screens for Vue 3 applications by capturing page structures from your Vue Router routes.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'skeleton-screen',
    'vue3',
    'puppeteer',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/skeleton-screen-vite-plugin',
  },
  source: {
    npm: 'skeleton-screen-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 109,
      weekly: 4,
    },
  },
})
