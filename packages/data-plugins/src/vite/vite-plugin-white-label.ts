import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-white-label',
  description: 'White-label / multi-brand system for Vite (Vue / React): hard-link shadow directory with brand inheritance (extends) and HMR',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'react',
    'white-label',
    'multi-tenant',
    'multi-brand',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/evanz1215/vite-plugin-white-label',
    npm: 'https://www.npmjs.com/package/vite-plugin-white-label',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 4,
    },
  },
})
