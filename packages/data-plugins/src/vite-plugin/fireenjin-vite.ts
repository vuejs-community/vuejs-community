import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fireenjin/vite',
  description: 'FireEnjin build tools for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'firebase',
    'vite-plugin',
    'multi-page',
    'mpa',
    'MPA',
  ],
  source: {
    github: 'fireenjin/vite',
    npm: '@fireenjin/vite',
  },
  links: {
    github: 'https://github.com/fireenjin/vite',
    npm: 'https://www.npmjs.com/package/@fireenjin/vite',
    website: 'https://github.com/fireenjin/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
