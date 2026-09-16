import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-foundryvtt',
  description: 'Plugin for building for foundryvtt. Enables hmr and manifest substitution.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'foundryvtt',
    'vite-plugin',
    'vite',
  ],
  source: {
    npm: 'vite-plugin-foundryvtt',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-foundryvtt',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 241,
      weekly: 13,
    },
  },
})
