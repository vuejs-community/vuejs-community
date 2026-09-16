import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-s3',
  description: 'This plugin will upload all built assets to s3',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    's3',
    'vite-plugin',
  ],
  source: {
    github: 'sportsrecruits/vite-plugin-s3',
    npm: 'vite-plugin-s3',
  },
  links: {
    github: 'https://github.com/sportsrecruits/vite-plugin-s3',
    npm: 'https://www.npmjs.com/package/vite-plugin-s3',
    website: 'https://github.com/sportsrecruits/vite-plugin-s3',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 3063,
      weekly: 721,
    },
  },
})
