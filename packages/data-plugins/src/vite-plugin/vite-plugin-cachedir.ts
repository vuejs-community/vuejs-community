import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cachedir',
  description: 'Resolves default cache directory in monorepo',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cache',
  ],
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-cachedir',
    website: 'https://github.com/bent10/vite-plugins/tree/main/packages/plugin-cachedir',
  },
  source: {
    github: 'bent10/vite-plugins',
    npm: 'vite-plugin-cachedir',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 629,
      weekly: 120,
    },
  },
})
