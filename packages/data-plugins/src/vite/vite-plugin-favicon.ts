import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-favicon',
  description: 'Create and manage favicons for vite bundles, mostily compatible with the config of favicons-webpack-plugin',
  icon: 'logos:vite-icon',
  version: '1.0.8',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'favicon',
    'favicons',
    'image',
    'generate',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'josh-hemphill/vite-plugin-favicon',
    npm: 'vite-plugin-favicon',
  },
  links: {
    github: 'https://github.com/josh-hemphill/vite-plugin-favicon',
    npm: 'https://www.npmjs.com/package/vite-plugin-favicon',
  },
  stats: {
    downloads: {
      monthly: 1454,
      weekly: 319,
    },
  },
})
