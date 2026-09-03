import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@outray/vite',
  description: 'Vite plugin to automatically expose your dev server via Outray tunnel',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tunnel',
    'outray',
    'ngrok',
    'localhost',
    'development',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/akinloluwami/outray',
    npm: 'https://www.npmjs.com/package/@outray/vite',
  },
  stats: {
    downloads: {
      monthly: 92,
      weekly: 25,
    },
  },
})
