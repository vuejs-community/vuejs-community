import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@upgoose/vite-plugin',
  description: 'Upload source maps to Upgoose on build so error stack traces are symbolicated (Vite plugin + CLI)',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'error-tracking',
    'source-maps',
    'sourcemap',
    'symbolication',
    'vite-plugin',
    'upgoose',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/randell/upgoose',
    npm: 'https://www.npmjs.com/package/@upgoose/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 89,
      weekly: 21,
    },
  },
})
