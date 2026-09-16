import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-favicon',
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
  source: {
    github: 'josh-hemphill/vite-plugin-favicon',
    npm: 'vite-plugin-favicon',
  },
  links: {
    github: 'https://github.com/josh-hemphill/vite-plugin-favicon',
    npm: 'https://www.npmjs.com/package/vite-plugin-favicon',
    website: 'https://github.com/josh-hemphill/vite-plugin-favicon#readme',
  },
  stats: {
    stars: 51,
    downloads: {
      monthly: 1072,
      weekly: 134,
    },
  },
})
