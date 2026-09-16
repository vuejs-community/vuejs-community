import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@outray/vite',
  description: 'Vite plugin to automatically expose your dev server via Outray tunnel',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tunnel',
    'outray',
    'ngrok',
    'localhost',
    'development',
  ],
  source: {
    github: 'akinloluwami/outray',
    npm: '@outray/vite',
  },
  links: {
    github: 'https://github.com/akinloluwami/outray',
    npm: 'https://www.npmjs.com/package/@outray/vite',
    website: 'https://outray.dev',
  },
  stats: {
    stars: 1143,
    downloads: {
      monthly: 175,
      weekly: 109,
    },
  },
})
