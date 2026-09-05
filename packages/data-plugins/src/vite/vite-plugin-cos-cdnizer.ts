import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cos-cdnizer',
  description: '一个替换本地静态资源引用为已上传至 CDN 地址的 vite 插件。',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'static',
    'oss',
    'cos',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/smile-alive/vite-plugin-cos-cdnizer',
    npm: 'https://www.npmjs.com/package/vite-plugin-cos-cdnizer',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 3,
    },
  },
})
