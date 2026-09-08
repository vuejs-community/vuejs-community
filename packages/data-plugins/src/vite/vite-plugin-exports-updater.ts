import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-exports-updater',
  description: 'A Vite plugin that automatically updates your package.json exports map after a build.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'breningham/vite-plugin-exports-updater',
    npm: 'vite-plugin-exports-updater',
  },
  links: {
    github: 'https://github.com/breningham/vite-plugin-exports-updater',
    npm: 'https://www.npmjs.com/package/vite-plugin-exports-updater',
  },
  stats: {
    downloads: {
      monthly: 41,
      weekly: 3,
    },
  },
})
