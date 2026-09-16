import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cos-cdnizer',
  description: '一个替换本地静态资源引用为已上传至 CDN 地址的 vite 插件。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'static',
    'oss',
    'cos',
  ],
  source: {
    github: 'smile-alive/vite-plugin-cos-cdnizer',
    npm: 'vite-plugin-cos-cdnizer',
  },
  links: {
    github: 'https://github.com/smile-alive/vite-plugin-cos-cdnizer',
    npm: 'https://www.npmjs.com/package/vite-plugin-cos-cdnizer',
    website: 'https://github.com/smile-alive/vite-plugin-cos-cdnizer.git',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
