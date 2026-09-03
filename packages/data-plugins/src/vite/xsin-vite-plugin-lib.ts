import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xsin/vite-plugin-lib',
  description: 'Vite plugin for build configuration, automatic aliases, and type declarations.',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'declarations',
    'library',
    'aliases',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xsin/vue-waterfall',
    npm: 'https://www.npmjs.com/package/@xsin/vite-plugin-lib',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 8,
    },
  },
})
