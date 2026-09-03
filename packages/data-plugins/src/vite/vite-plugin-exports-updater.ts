import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-exports-updater',
  description: 'A Vite plugin that automatically updates your package.json exports map after a build.',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'exports',
    'package.json',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/breningham/vite-plugin-exports-updater',
    npm: 'https://www.npmjs.com/package/vite-plugin-exports-updater',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 5,
    },
  },
})
