import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-to-s3',
  description: 'upload dist to s3',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    's3',
    'deploy',
  ],
  links: {
    github: 'https://github.com/chenx/vite-plugin-deploy-s3',
    npm: 'https://www.npmjs.com/package/vite-plugin-deploy-to-s3',
    website: 'https://github.com/chenx/vite-plugin-deploy-s3#readme',
  },
  source: {
    github: 'chenx/vite-plugin-deploy-s3',
    npm: 'vite-plugin-deploy-to-s3',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
