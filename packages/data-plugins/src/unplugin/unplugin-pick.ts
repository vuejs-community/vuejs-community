import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-pick',
  description: 'Selective imports via `?pick`/`?drop` queries for server/client bundle splitting',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'RanolP/npm-packages',
    npm: 'unplugin-pick',
  },
  links: {
    github: 'https://github.com/RanolP/npm-packages',
    npm: 'https://www.npmjs.com/package/unplugin-pick',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
