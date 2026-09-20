import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-external-cdn',
  description: 'A vite plugin to import dependencies as a CDN.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'cdn',
    'external',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-external-cdn',
  },
  source: {
    npm: 'vite-plugin-external-cdn',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 82,
      weekly: 7,
    },
  },
})
