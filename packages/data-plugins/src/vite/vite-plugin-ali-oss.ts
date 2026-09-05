import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ali-oss',
  description: 'Upload the production files bundled in the project to Ali OSS, except for html',
  version: '2.1.1',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-ali-oss',
  },
  stats: {
    downloads: {
      monthly: 731,
      weekly: 183,
    },
  },
})
