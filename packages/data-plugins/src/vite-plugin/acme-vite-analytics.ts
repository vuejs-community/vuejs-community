import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'acme-vite-analytics',
  description: 'Lightweight Vite plugin for build-time analytics and telemetry',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'analytics',
    'telemetry',
  ],
  source: {
    npm: 'acme-vite-analytics',
  },
  links: {
    npm: 'https://www.npmjs.com/package/acme-vite-analytics',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 523,
      weekly: 93,
    },
  },
})
