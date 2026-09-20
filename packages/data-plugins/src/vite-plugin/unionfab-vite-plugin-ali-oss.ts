import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unionfab/vite-plugin-ali-oss',
  description: 'Upload the production files bundled in the project to Ali OSS, except for html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'ali-oss',
    'aliyun',
  ],
  links: {
    github: 'https://github.com/xiaweiss/vite-plugin-ali-oss',
    npm: 'https://www.npmjs.com/package/@unionfab/vite-plugin-ali-oss',
    website: 'https://github.com/xiaweiss/vite-plugin-ali-oss',
  },
  source: {
    github: 'xiaweiss/vite-plugin-ali-oss',
    npm: '@unionfab/vite-plugin-ali-oss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
