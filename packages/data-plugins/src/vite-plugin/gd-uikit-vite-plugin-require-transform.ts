import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gd-uikit/vite-plugin-require-transform',
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
  source: {
    github: 'WarrenJones/vite-plugin-require-transform',
    npm: '@gd-uikit/vite-plugin-require-transform',
  },
  links: {
    github: 'https://github.com/WarrenJones/vite-plugin-require-transform',
    npm: 'https://www.npmjs.com/package/@gd-uikit/vite-plugin-require-transform',
    website: 'https://github.com/WarrenJones/vite-plugin-require-transform#readme',
  },
  stats: {
    stars: 86,
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
