import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-aws3',
  description: 'This plugin will deploy assets to AWS (S3 & Cloudfront)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    's3',
    'aws',
    'cloudfront',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-aws3',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-aws3',
    website: 'https://gitea.treelet.net/Treelet/vite-plugin-aws',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
