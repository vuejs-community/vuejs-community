import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-apitemkin',
  description: 'Plug-and-play mock API plugin for Vite. The Potemkin village for your API.',
  icon: 'logos:vite-icon',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'mock',
    'mock-api',
    'api',
    'dev-server',
    'potemkin',
    'apitemkin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'jopavsky/vite-plugin-apitemkin',
    npm: 'vite-plugin-apitemkin',
  },
  links: {
    github: 'https://github.com/jopavsky/vite-plugin-apitemkin',
    npm: 'https://www.npmjs.com/package/vite-plugin-apitemkin',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 0,
    },
  },
})
