import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gleam-tools/vite',
  description: 'Import directly from *.gleam files using Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gleam',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'albizures/gleam-tools',
    npm: '@gleam-tools/vite',
  },
  links: {
    github: 'https://github.com/albizures/gleam-tools',
    npm: 'https://www.npmjs.com/package/@gleam-tools/vite',
    website: 'https://github.com/albizures/gleam-tools/tree/main#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
