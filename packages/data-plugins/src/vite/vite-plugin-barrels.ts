import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-barrels',
  description: 'Create barrels automatically via Vite!',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'barrel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/BlueFrog130/vite-plugin-barrels',
    npm: 'https://www.npmjs.com/package/vite-plugin-barrels',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
