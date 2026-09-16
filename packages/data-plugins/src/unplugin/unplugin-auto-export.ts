import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-export',
  description: 'Automates the maintenance of export statements in the index.ts file.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'transform',
  ],
  source: {
    github: 'coderhyh/unplugin-auto-export',
    npm: 'unplugin-auto-export',
  },
  links: {
    github: 'https://github.com/coderhyh/unplugin-auto-export',
    npm: 'https://www.npmjs.com/package/unplugin-auto-export',
    website: 'https://github.com/coderhyh/unplugin-auto-export#readme',
  },
  stats: {
    stars: 37,
    downloads: {
      monthly: 108,
      weekly: 34,
    },
  },
})
