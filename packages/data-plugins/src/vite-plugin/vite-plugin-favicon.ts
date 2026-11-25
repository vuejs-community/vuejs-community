import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-favicon',
  description: 'Generate browser and app icons from source artwork in Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'favicon',
    'icons',
    'pwa',
    'webmanifest',
  ],
  links: {
    github: 'https://github.com/josh-hemphill/vite-plugin-favicon',
    npm: 'https://www.npmjs.com/package/vite-plugin-favicon',
    website: 'https://github.com/josh-hemphill/vite-plugin-favicon#readme',
  },
  source: {
    github: 'josh-hemphill/vite-plugin-favicon',
    npm: 'vite-plugin-favicon',
  },
  stats: {
    stars: 51,
    downloads: {
      monthly: 1072,
      weekly: 134,
    },
  },
})
