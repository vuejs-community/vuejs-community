import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ali-oss',
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
  source: {
    github: 'xiaweiss/vite-plugin-ali-oss',
    npm: 'vite-plugin-ali-oss',
  },
  links: {
    github: 'https://github.com/xiaweiss/vite-plugin-ali-oss',
    npm: 'https://www.npmjs.com/package/vite-plugin-ali-oss',
    website: 'https://github.com/xiaweiss/vite-plugin-ali-oss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 693,
      weekly: 158,
    },
  },
})
