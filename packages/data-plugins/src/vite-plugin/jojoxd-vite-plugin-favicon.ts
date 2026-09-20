import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jojoxd/vite-plugin-favicon',
  description: 'Create and manage favicons for vite bundles, mostily compatible with the config of favicons-webpack-plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'favicon',
    'favicons',
    'image',
    'generate',
  ],
  links: {
    github: 'https://github.com/jojoxd/vite-plugin-favicon',
    npm: 'https://www.npmjs.com/package/@jojoxd/vite-plugin-favicon',
    website: 'https://github.com/josh-hemphill/vite-plugin-favicon#readme',
  },
  source: {
    github: 'jojoxd/vite-plugin-favicon',
    npm: '@jojoxd/vite-plugin-favicon',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
