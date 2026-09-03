import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'acme-vite-analytics',
  description: 'Lightweight Vite plugin for build-time analytics and telemetry',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'analytics',
    'telemetry',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/acme-vite-analytics',
  },
  stats: {
    downloads: {
      monthly: 563,
      weekly: 137,
    },
  },
})
