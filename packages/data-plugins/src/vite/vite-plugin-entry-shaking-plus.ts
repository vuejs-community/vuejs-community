import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-entry-shaking-plus',
  description: 'Mimic tree-shaking behaviour when importing code from an entry file in development mode.',
  version: '0.2.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'entry',
    'tree shaking',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Dschungelabenteuer/vite-plugin-entry-shaking',
    npm: 'https://www.npmjs.com/package/vite-plugin-entry-shaking-plus',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 0,
    },
  },
})
