import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tourmind-frontend/monitor-plugin-vite',
  description: 'Vite plugin that uploads sourcemaps to a frontend-monitor server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sourcemap',
    'frontend-monitor',
    'error-tracking',
  ],
  source: {
    npm: '@tourmind-frontend/monitor-plugin-vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@tourmind-frontend/monitor-plugin-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 41,
      weekly: 9,
    },
  },
})
