import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-todos',
  description: '[![NPM version](https://img.shields.io/npm/v/unplugin-todos)](https://www.npmjs.com/package/unplugin-todos)',
  icon: 'icon:dark-unplugin',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'todo',
    'vite',
    'esbuild',
    'nodejs',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'tmg0/unplugin-todos',
    npm: 'unplugin-todos',
  },
  links: {
    github: 'https://github.com/tmg0/unplugin-todos',
    npm: 'https://www.npmjs.com/package/unplugin-todos',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
