import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spa-reload',
  description: 'A Vite plugin check new version for reload in SPA.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'spa',
    'reload',
  ],
  source: {
    npm: 'vite-plugin-spa-reload',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-spa-reload',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
