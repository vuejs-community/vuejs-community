import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-apitemkin',
  description: 'Plug-and-play mock API plugin for Vite. The Potemkin village for your API.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'jopavsky/vite-plugin-apitemkin',
    npm: 'vite-plugin-apitemkin',
  },
  links: {
    github: 'https://github.com/jopavsky/vite-plugin-apitemkin',
    npm: 'https://www.npmjs.com/package/vite-plugin-apitemkin',
    website: 'https://github.com/jopavsky/vite-plugin-apitemkin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
