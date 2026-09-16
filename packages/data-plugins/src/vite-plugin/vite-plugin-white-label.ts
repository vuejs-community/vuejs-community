import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-white-label',
  description: 'White-label / multi-brand system for Vite (Vue / React): hard-link shadow directory with brand inheritance (extends) and HMR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'react',
    'white-label',
    'multi-tenant',
    'multi-brand',
  ],
  source: {
    github: 'evanz1215/vite-plugin-white-label',
    npm: 'vite-plugin-white-label',
  },
  links: {
    github: 'https://github.com/evanz1215/vite-plugin-white-label',
    npm: 'https://www.npmjs.com/package/vite-plugin-white-label',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 216,
      weekly: 16,
    },
  },
})
