import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-pick',
  description: 'Selective imports via `?pick`/`?drop` queries for server/client bundle splitting',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'tree-shaking',
    'code-splitting',
    'server-components',
  ],
  links: {
    github: 'https://github.com/RanolP/npm-packages',
    npm: 'https://www.npmjs.com/package/unplugin-pick',
    website: 'https://github.com/RanolP/npm-packages#readme',
  },
  source: {
    github: 'RanolP/npm-packages',
    npm: 'unplugin-pick',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
