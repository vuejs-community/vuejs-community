import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@populatus/vite-plugin-import-sfc',
  description: 'A vite plugin that allows you to automatically import sfc',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-import',
  ],
  links: {
    github: 'https://github.com/populatus/vite-plugin-import-sfc',
    npm: 'https://www.npmjs.com/package/@populatus/vite-plugin-import-sfc',
    website: 'https://github.com/populatus/vite-plugin-import-sfc#readme',
  },
  source: {
    github: 'populatus/vite-plugin-import-sfc',
    npm: '@populatus/vite-plugin-import-sfc',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
