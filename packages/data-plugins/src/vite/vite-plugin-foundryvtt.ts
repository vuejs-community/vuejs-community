import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-foundryvtt',
  description: 'Plugin for building for foundryvtt. Enables hmr and manifest substitution.',
  version: '3.0.0',
  category: 'plugin',
  tags: [
    'foundryvtt',
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-foundryvtt',
  },
  stats: {
    downloads: {
      monthly: 270,
      weekly: 91,
    },
  },
})
