import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bookmarklet',
  description: 'A Vite plugin to import scripts as bookmarklets',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'bookmarklet',
  ],
  source: {
    github: 'idleberg/vite-plugin-bookmarklet',
    npm: 'vite-plugin-bookmarklet',
  },
  links: {
    github: 'https://github.com/idleberg/vite-plugin-bookmarklet',
    npm: 'https://www.npmjs.com/package/vite-plugin-bookmarklet',
    website: 'https://github.com/idleberg/vite-plugin-bookmarklet#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
