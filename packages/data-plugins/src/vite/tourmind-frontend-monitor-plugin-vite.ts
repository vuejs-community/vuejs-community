import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tourmind-frontend/monitor-plugin-vite',
  description: 'Vite plugin that uploads sourcemaps to a frontend-monitor server.',
  version: '1.6.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sourcemap',
    'frontend-monitor',
    'error-tracking',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@tourmind-frontend/monitor-plugin-vite',
  },
  stats: {
    downloads: {
      monthly: 109,
      weekly: 16,
    },
  },
})
