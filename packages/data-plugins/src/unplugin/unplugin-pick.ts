import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-pick',
  description: 'Selective imports via `?pick`/`?drop` queries for server/client bundle splitting',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'tree-shaking',
    'code-splitting',
    'server-components',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/RanolP/npm-packages',
    npm: 'https://www.npmjs.com/package/unplugin-pick',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
