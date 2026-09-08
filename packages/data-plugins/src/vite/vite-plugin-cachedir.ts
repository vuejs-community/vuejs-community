import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cachedir',
  description: 'Resolves default cache directory in monorepo',
  icon: 'logos:vite-icon',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cache',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'bent10/vite-plugins',
    npm: 'vite-plugin-cachedir',
  },
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-cachedir',
  },
  stats: {
    downloads: {
      monthly: 582,
      weekly: 177,
    },
  },
})
