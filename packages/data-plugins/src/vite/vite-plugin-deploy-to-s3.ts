import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-to-s3',
  description: 'upload dist to s3',
  version: '0.0.8',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    's3',
    'deploy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chenx/vite-plugin-deploy-s3',
    npm: 'https://www.npmjs.com/package/vite-plugin-deploy-to-s3',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 0,
    },
  },
})
