import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-summary',
  description: 'Generate project build information to facilitate checking updates in the frontend implementation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/TheSunset/vite-plugin-build-summary',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-summary',
    website: 'https://github.com/TheSunset/vite-plugin-build-summary#readme',
  },
  source: {
    github: 'TheSunset/vite-plugin-build-summary',
    npm: 'vite-plugin-build-summary',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
