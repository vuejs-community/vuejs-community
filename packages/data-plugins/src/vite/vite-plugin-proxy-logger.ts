import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proxy-logger',
  description: '一个用于在开发环境中记录查看代理请求的 Vite 插件。',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'proxy',
    'logger',
    'debug',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/huangmingfu/vite-plugin-proxy-logger',
    npm: 'https://www.npmjs.com/package/vite-plugin-proxy-logger',
  },
  stats: {
    downloads: {
      monthly: 61,
      weekly: 23,
    },
  },
})
