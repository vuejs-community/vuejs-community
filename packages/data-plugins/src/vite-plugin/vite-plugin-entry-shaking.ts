import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-entry-shaking',
  description: 'Mimic tree-shaking behaviour when importing code from an entry file in development mode.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'entry',
    'tree shaking',
  ],
  links: {
    github: 'https://github.com/Dschungelabenteuer/vite-plugin-entry-shaking',
    npm: 'https://www.npmjs.com/package/vite-plugin-entry-shaking',
    website: 'https://github.com/Dschungelabenteuer/vite-plugin-entry-shaking/tree/main/#readme',
  },
  source: {
    github: 'Dschungelabenteuer/vite-plugin-entry-shaking',
    npm: 'vite-plugin-entry-shaking',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34308,
      weekly: 3421,
    },
  },
})
