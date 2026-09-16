import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-exports-updater',
  description: 'A Vite plugin that automatically updates your package.json exports map after a build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'exports',
    'package.json',
  ],
  source: {
    github: 'breningham/vite-plugin-exports-updater',
    npm: 'vite-plugin-exports-updater',
  },
  links: {
    github: 'https://github.com/breningham/vite-plugin-exports-updater',
    npm: 'https://www.npmjs.com/package/vite-plugin-exports-updater',
    website: 'https://github.com/breningham/vite-plugin-exports-updater#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
