import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@stellaris/vite-plugin-tencent-oss',
  description: 'Upload the production files bundled in the project to Tencent CSS, except for html',
  version: '0.1.3',
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
    npm: 'https://www.npmjs.com/package/@stellaris/vite-plugin-tencent-oss',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 12,
    },
  },
})
