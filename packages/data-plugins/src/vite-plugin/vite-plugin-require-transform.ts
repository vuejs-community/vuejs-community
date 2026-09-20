import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-require-transform',
  description: 'A plugin for vite that convert from require syntax to import that compat for es module.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'require',
  ],
  links: {
    github: 'https://github.com/WarrenJones/vite-plugin-require-transform',
    npm: 'https://www.npmjs.com/package/vite-plugin-require-transform',
    website: 'https://github.com/WarrenJones/vite-plugin-require-transform#readme',
  },
  source: {
    github: 'WarrenJones/vite-plugin-require-transform',
    npm: 'vite-plugin-require-transform',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 162554,
      weekly: 28929,
    },
  },
})
