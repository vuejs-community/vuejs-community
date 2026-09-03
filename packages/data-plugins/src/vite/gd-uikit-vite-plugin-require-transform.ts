import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gd-uikit/vite-plugin-require-transform',
  description: 'A plugin for vite that convert from require syntax to import that compat for es module.',
  version: '1.0.1',
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
    npm: 'https://www.npmjs.com/package/@gd-uikit/vite-plugin-require-transform',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
