import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'skeleton-screen-vite-plugin',
  description: 'A Vite plugin that automatically generates skeleton screens for Vue 3 applications by capturing page structures from your Vue Router routes.',
  version: '0.0.59',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'skeleton-screen',
    'vue3',
    'puppeteer',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/skeleton-screen-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 208,
      weekly: 8,
    },
  },
})
