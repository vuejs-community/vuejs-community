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
  links: {
    npm: 'https://www.npmjs.com/package/acme-vite-analytics',
  },
  source: {
    npm: 'acme-vite-analytics',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 523,
      weekly: 93,
    },
  },
})
