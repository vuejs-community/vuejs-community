import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-summary',
  description: 'Generate project build information to facilitate checking updates in the frontend implementation',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/TheSunset/vite-plugin-build-summary',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-summary',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
