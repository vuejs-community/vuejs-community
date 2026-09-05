import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spa-reload',
  description: 'A Vite plugin check new version for reload in SPA.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'spa',
    'reload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-spa-reload',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
