import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-oss',
  description: 'Upload Vite build artifacts to Aliyun OSS.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'oss',
    'alioss',
    'deploy',
    'upload',
  ],
  links: {
    github: 'https://github.com/yulin96/vite-plugin-deploy-oss',
    npm: 'https://www.npmjs.com/package/vite-plugin-deploy-oss',
    website: 'https://github.com/yulin96/vite-plugin-deploy-oss',
  },
  source: {
    github: 'yulin96/vite-plugin-deploy-oss',
    npm: 'vite-plugin-deploy-oss',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 72,
      weekly: 10,
    },
  },
})
