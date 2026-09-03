import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cachedir',
  description: 'Resolves default cache directory in monorepo',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cache',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-cachedir',
  },
  stats: {
    downloads: {
      monthly: 582,
      weekly: 177,
    },
  },
})
