import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tencent-oss',
  description: 'Upload the production files bundled in the project to Tencent CSS, except for html',
  version: '0.0.7',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'tencent-oss',
    'tencent-css',
    'tencent',
    '腾讯云',
    '腾讯云对象存储',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/taosiqi/vite-plugin-tencent-oss',
    npm: 'https://www.npmjs.com/package/vite-plugin-tencent-oss',
  },
  stats: {
    downloads: {
      monthly: 72,
      weekly: 14,
    },
  },
})
