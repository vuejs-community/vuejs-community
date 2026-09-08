import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-entry-shaking',
  description: 'Mimic tree-shaking behaviour when importing code from an entry file in development mode.',
  icon: 'logos:vite-icon',
  version: '0.5.2',
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
    npm: 'vite-plugin-entry-shaking',
  },
  links: {
    github: 'https://github.com/Dschungelabenteuer/vite-plugin-entry-shaking',
    npm: 'https://www.npmjs.com/package/vite-plugin-entry-shaking',
  },
  stats: {
    downloads: {
      monthly: 47464,
      weekly: 11423,
    },
  },
})
