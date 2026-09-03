import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-s3',
  description: 'This plugin will upload all built assets to s3',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    's3',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sportsrecruits/vite-plugin-s3',
    npm: 'https://www.npmjs.com/package/vite-plugin-s3',
  },
  stats: {
    downloads: {
      monthly: 3698,
      weekly: 670,
    },
  },
})
