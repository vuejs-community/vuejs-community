import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@upgoose/vite-plugin',
  description: 'Upload source maps to Upgoose on build so error stack traces are symbolicated (Vite plugin + CLI)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'error-tracking',
    'source-maps',
    'sourcemap',
    'symbolication',
    'vite-plugin',
    'upgoose',
  ],
  source: {
    github: 'randell/upgoose',
    npm: '@upgoose/vite-plugin',
  },
  links: {
    github: 'https://github.com/randell/upgoose',
    npm: 'https://www.npmjs.com/package/@upgoose/vite-plugin',
    website: 'https://upgoose.app/docs#source-maps',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 118,
      weekly: 41,
    },
  },
})
