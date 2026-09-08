import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-conditional-imports',
  description: 'Strip conditional imports in production builds and warn on leftover references',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-conditional-imports',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-conditional-imports',
  },
  stats: {
    downloads: {
      monthly: 38,
      weekly: 0,
    },
  },
})
