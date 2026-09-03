import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@unionfab/vite-plugin-ali-oss',
  description: 'Upload the production files bundled in the project to Ali OSS, except for html',
  version: '1.0.8',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'ali-oss',
    'aliyun',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xiaweiss/vite-plugin-ali-oss',
    npm: 'https://www.npmjs.com/package/@unionfab/vite-plugin-ali-oss',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 5,
    },
  },
})
