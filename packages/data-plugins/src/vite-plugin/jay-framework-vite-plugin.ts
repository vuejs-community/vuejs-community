import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jay-framework/vite-plugin',
  description: 'The plugin transform `.jay-html` files and jay component files as part of a vite build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'jay',
    'secure',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@jay-framework/vite-plugin',
  },
  source: {
    npm: '@jay-framework/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1290,
      weekly: 52,
    },
  },
})
