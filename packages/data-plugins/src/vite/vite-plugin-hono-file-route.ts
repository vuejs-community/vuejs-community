import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hono-file-route',
  description: 'Vite 插件：按文件名约定生成 Hono 路由，支持 [id] 参数、路由组、构建期校验与 HMR',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hono',
    'file-routes',
    'file-based-routing',
    'cloudflare',
    'workers',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-hono-file-route',
    npm: 'https://www.npmjs.com/package/vite-plugin-hono-file-route',
  },
  stats: {
    downloads: {
      monthly: 642,
      weekly: 18,
    },
  },
})
