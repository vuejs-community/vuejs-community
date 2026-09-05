import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-oss',
  description: 'Upload Vite build artifacts to Aliyun OSS.',
  version: '3.5.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'oss',
    'alioss',
    'deploy',
    'upload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yulin96/vite-plugin-deploy-oss',
    npm: 'https://www.npmjs.com/package/vite-plugin-deploy-oss',
  },
  stats: {
    downloads: {
      monthly: 158,
      weekly: 18,
    },
  },
})
