import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'napcat-plugin-debug-cli',
  description: 'NapCat 插件调试 CLI — 连接调试服务实现热重载',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'napcat',
    'plugin',
    'debug',
    'hmr',
    'hot-reload',
    'vite-plugin',
  ],
  source: {
    npm: 'napcat-plugin-debug-cli',
  },
  links: {
    npm: 'https://www.npmjs.com/package/napcat-plugin-debug-cli',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 194,
      weekly: 32,
    },
  },
})
