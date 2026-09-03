import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-export',
  description: 'Automates the maintenance of export statements in the index.ts file.',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/coderhyh/unplugin-auto-export',
    npm: 'https://www.npmjs.com/package/unplugin-auto-export',
  },
  stats: {
    downloads: {
      monthly: 229,
      weekly: 34,
    },
  },
})
