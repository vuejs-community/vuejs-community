import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ol-external',
  description: 'external openlayers plugin for vite',
  icon: 'logos:vite-icon',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'external',
    'openlayers',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'aliothor/vite-plugin-ol-external',
    npm: 'vite-plugin-ol-external',
  },
  links: {
    github: 'https://github.com/aliothor/vite-plugin-ol-external',
    npm: 'https://www.npmjs.com/package/vite-plugin-ol-external',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 5,
    },
  },
})
