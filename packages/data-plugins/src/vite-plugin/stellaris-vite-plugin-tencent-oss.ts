import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stellaris/vite-plugin-tencent-oss',
  description: 'Upload the production files bundled in the project to Tencent CSS, except for html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'tencent-oss',
    'tencent-css',
    'tencent',
    '腾讯云',
    '腾讯云对象存储',
  ],
  source: {
    github: 'taosiqi/vite-plugin-tencent-oss',
    npm: '@stellaris/vite-plugin-tencent-oss',
  },
  links: {
    github: 'https://github.com/taosiqi/vite-plugin-tencent-oss',
    npm: 'https://www.npmjs.com/package/@stellaris/vite-plugin-tencent-oss',
    website: 'https://github.com/taosiqi/vite-plugin-tencent-oss',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 35,
      weekly: 5,
    },
  },
})
