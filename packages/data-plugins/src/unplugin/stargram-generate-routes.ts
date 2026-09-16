import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stargram/generate-routes',
  description: 'Stargram unplugin used to import routes',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'auto-import',
    'transform',
  ],
  source: {
    npm: '@stargram/generate-routes',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@stargram/generate-routes',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 8,
    },
  },
})
