import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-map-cdn',
  description: 'Use dependencies from CDNs using import-maps in vite',
  version: '0.1.9',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'import-maps',
    'import-map',
    'importmap',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pakholeung37/vite-plugin-import-maps',
    npm: 'https://www.npmjs.com/package/vite-plugin-map-cdn',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 11,
    },
  },
})
