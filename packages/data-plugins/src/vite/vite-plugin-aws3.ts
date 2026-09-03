import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-aws3',
  description: 'This plugin will deploy assets to AWS (S3 & Cloudfront)',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    's3',
    'aws',
    'cloudfront',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-aws3',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
