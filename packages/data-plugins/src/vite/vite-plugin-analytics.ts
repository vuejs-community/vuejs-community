import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-analytics',
  description: 'Universal Analytics Engines Integration',
  icon: 'logos:vite-icon',
  version: '0.0.13',
  category: 'plugin',
  tags: [
    'analytics',
    'google-analytics',
    'umami',
    'plausible',
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'yjl9903/unplugin-analytics',
    npm: 'vite-plugin-analytics',
  },
  links: {
    github: 'https://github.com/yjl9903/unplugin-analytics',
    npm: 'https://www.npmjs.com/package/vite-plugin-analytics',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 8,
    },
  },
})
