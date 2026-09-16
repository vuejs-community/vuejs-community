import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-todos',
  description: '[![NPM version](https://img.shields.io/npm/v/unplugin-todos)](https://www.npmjs.com/package/unplugin-todos)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'todo',
    'vite',
    'esbuild',
    'nodejs',
  ],
  source: {
    github: 'tmg0/unplugin-todos',
    npm: 'unplugin-todos',
  },
  links: {
    github: 'https://github.com/tmg0/unplugin-todos',
    npm: 'https://www.npmjs.com/package/unplugin-todos',
    website: 'https://github.com/tmg0/unplugin-todos#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
