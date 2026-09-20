import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proxy-logger',
  description: '一个用于在开发环境中记录查看代理请求的 Vite 插件。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'proxy',
    'logger',
    'debug',
  ],
  links: {
    github: 'https://github.com/huangmingfu/vite-plugin-proxy-logger',
    npm: 'https://www.npmjs.com/package/vite-plugin-proxy-logger',
    website: 'https://github.com/huangmingfu/vite-plugin-proxy-logger#readme',
  },
  source: {
    github: 'huangmingfu/vite-plugin-proxy-logger',
    npm: 'vite-plugin-proxy-logger',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 39,
      weekly: 4,
    },
  },
})
