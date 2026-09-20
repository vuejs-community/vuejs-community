import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-font-manifest',
  description: 'Add font information to Vite build manifests',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'fonts',
    'webfonts',
    'manifest',
  ],
  links: {
    github: 'https://github.com/daun/vite-plugin-font-manifest',
    npm: 'https://www.npmjs.com/package/vite-plugin-font-manifest',
    website: 'http://github.com/daun/vite-plugin-font-manifest#readme',
  },
  source: {
    github: 'daun/vite-plugin-font-manifest',
    npm: 'vite-plugin-font-manifest',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
