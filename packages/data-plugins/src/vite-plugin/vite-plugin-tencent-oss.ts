import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tencent-oss',
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
  links: {
    github: 'https://github.com/taosiqi/vite-plugin-tencent-oss',
    npm: 'https://www.npmjs.com/package/vite-plugin-tencent-oss',
    website: 'https://github.com/taosiqi/vite-plugin-tencent-oss',
  },
  source: {
    github: 'taosiqi/vite-plugin-tencent-oss',
    npm: 'vite-plugin-tencent-oss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 50,
      weekly: 4,
    },
  },
})
