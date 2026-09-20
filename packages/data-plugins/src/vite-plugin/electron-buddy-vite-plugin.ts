import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@electron-buddy/vite-plugin',
  description: 'vite plugin for electron quick start',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'electron',
  ],
  links: {
    github: 'https://github.com/livemehere/electron-buddy',
    npm: 'https://www.npmjs.com/package/@electron-buddy/vite-plugin',
    website: 'https://github.com/livemehere/electron-buddy',
  },
  source: {
    github: 'livemehere/electron-buddy',
    npm: '@electron-buddy/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
