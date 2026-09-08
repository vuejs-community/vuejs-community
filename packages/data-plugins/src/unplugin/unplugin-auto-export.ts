import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-export',
  description: 'Automates the maintenance of export statements in the index.ts file.',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'coderhyh/unplugin-auto-export',
    npm: 'unplugin-auto-export',
  },
  links: {
    github: 'https://github.com/coderhyh/unplugin-auto-export',
    npm: 'https://www.npmjs.com/package/unplugin-auto-export',
  },
  stats: {
    downloads: {
      monthly: 145,
      weekly: 30,
    },
  },
})
