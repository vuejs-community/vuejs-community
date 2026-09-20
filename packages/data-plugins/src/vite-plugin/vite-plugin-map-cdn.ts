import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-map-cdn',
  description: 'Use dependencies from CDNs using import-maps in vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'import-maps',
    'import-map',
    'importmap',
  ],
  links: {
    github: 'https://github.com/pakholeung37/vite-plugin-import-maps',
    npm: 'https://www.npmjs.com/package/vite-plugin-map-cdn',
    website: 'https://github.com/pakholeung37/vite-plugin-import-maps#readme',
  },
  source: {
    github: 'pakholeung37/vite-plugin-import-maps',
    npm: 'vite-plugin-map-cdn',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
