import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bookmarklet',
  description: 'A Vite plugin to import scripts as bookmarklets',
  icon: 'logos:vite-icon',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'bookmarklet',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'idleberg/vite-plugin-bookmarklet',
    npm: 'vite-plugin-bookmarklet',
  },
  links: {
    github: 'https://github.com/idleberg/vite-plugin-bookmarklet',
    npm: 'https://www.npmjs.com/package/vite-plugin-bookmarklet',
  },
  stats: {
    downloads: {
      monthly: 43,
      weekly: 11,
    },
  },
})
