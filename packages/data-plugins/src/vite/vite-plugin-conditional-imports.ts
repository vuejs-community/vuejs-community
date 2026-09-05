import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-conditional-imports',
  description: 'Strip conditional imports in production builds and warn on leftover references',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'conditional-imports',
    'tree-shake',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-conditional-imports',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 3,
    },
  },
})
