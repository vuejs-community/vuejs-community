import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-entry-shaking-plus',
  description: 'Mimic tree-shaking behaviour when importing code from an entry file in development mode.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'Dschungelabenteuer/vite-plugin-entry-shaking',
    npm: 'vite-plugin-entry-shaking-plus',
  },
  links: {
    github: 'https://github.com/Dschungelabenteuer/vite-plugin-entry-shaking',
    npm: 'https://www.npmjs.com/package/vite-plugin-entry-shaking-plus',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 7,
    },
  },
})
