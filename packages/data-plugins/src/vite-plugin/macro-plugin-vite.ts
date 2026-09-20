import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@macro-plugin/vite',
  description: 'Macro plugins integration for vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vitejs',
    'vite-plugin',
    'macro',
    'macro-plugin',
  ],
  links: {
    github: 'https://github.com/macro-plugin/macros',
    npm: 'https://www.npmjs.com/package/@macro-plugin/vite',
    website: 'https://github.com/macro-plugin/macros/tree/main/packages/vite',
  },
  source: {
    github: 'macro-plugin/macros',
    npm: '@macro-plugin/vite',
  },
  stats: {
    stars: 16,
    downloads: {
      monthly: 43,
      weekly: 3,
    },
  },
})
