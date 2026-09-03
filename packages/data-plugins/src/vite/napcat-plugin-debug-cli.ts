import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'napcat-plugin-debug-cli',
  description: 'NapCat 插件调试 CLI — 连接调试服务实现热重载',
  version: '1.2.8',
  category: 'plugin',
  tags: [
    'napcat',
    'plugin',
    'debug',
    'hmr',
    'hot-reload',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/napcat-plugin-debug-cli',
  },
  stats: {
    downloads: {
      monthly: 218,
      weekly: 51,
    },
  },
})
