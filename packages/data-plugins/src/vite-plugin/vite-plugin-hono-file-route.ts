import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hono-file-route',
  description: 'Vite 插件：按文件名约定生成 Hono 路由，支持 [id] 参数、路由组、构建期校验与 HMR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hono',
    'file-routes',
    'file-based-routing',
    'cloudflare',
    'workers',
  ],
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-hono-file-route',
    npm: 'https://www.npmjs.com/package/vite-plugin-hono-file-route',
    website: 'https://github.com/AkagiYui/vite-plugin-hono-file-route',
  },
  source: {
    github: 'AkagiYui/vite-plugin-hono-file-route',
    npm: 'vite-plugin-hono-file-route',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 63,
      weekly: 5,
    },
  },
})
