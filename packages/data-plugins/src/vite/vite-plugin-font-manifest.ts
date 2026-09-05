import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-font-manifest',
  description: 'Add font information to Vite build manifests',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'fonts',
    'webfonts',
    'manifest',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/daun/vite-plugin-font-manifest',
    npm: 'https://www.npmjs.com/package/vite-plugin-font-manifest',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
