import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-gleam',
  description: 'Import directly from *.gleam files using Vite',
  version: '1.7.1',
  category: 'plugin',
  tags: [
    'gleam',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Enderchief/gleam-tools',
    npm: 'https://www.npmjs.com/package/vite-gleam',
  },
  stats: {
    downloads: {
      monthly: 221,
      weekly: 62,
    },
  },
})
