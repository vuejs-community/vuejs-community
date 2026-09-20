import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@starnexus/generate-routes',
  description: 'StarNexus unplugin used to import routes',
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
  links: {
    npm: 'https://www.npmjs.com/package/@starnexus/generate-routes',
  },
  source: {
    npm: '@starnexus/generate-routes',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
