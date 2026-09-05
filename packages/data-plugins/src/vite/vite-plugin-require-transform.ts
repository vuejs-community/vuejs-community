import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-require-transform',
  description: 'A plugin for vite that convert from require syntax to import that compat for es module.',
  version: '1.0.21',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'require',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/WarrenJones/vite-plugin-require-transform',
    npm: 'https://www.npmjs.com/package/vite-plugin-require-transform',
  },
  stats: {
    downloads: {
      monthly: 180916,
      weekly: 43204,
    },
  },
})
