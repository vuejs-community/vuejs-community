import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gleam-tools/vite',
  description: 'Import directly from *.gleam files using Vite',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'gleam',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/albizures/gleam-tools',
    npm: 'https://www.npmjs.com/package/@gleam-tools/vite',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
