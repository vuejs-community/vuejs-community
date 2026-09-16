import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-analytics',
  description: 'Universal Analytics Engines Integration',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'analytics',
    'google-analytics',
    'umami',
    'plausible',
    'vite-plugin',
    'vite',
  ],
  source: {
    github: 'yjl9903/unplugin-analytics',
    npm: 'vite-plugin-analytics',
  },
  links: {
    github: 'https://github.com/yjl9903/unplugin-analytics',
    npm: 'https://www.npmjs.com/package/vite-plugin-analytics',
    website: 'https://github.com/yjl9903/unplugin-analytics#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
