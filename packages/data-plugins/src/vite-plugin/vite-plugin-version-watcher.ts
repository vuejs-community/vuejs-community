import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-watcher',
  description: 'Vite 插件：自动检测前端版本更新并提示用户刷新页面',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'update',
    'watcher',
  ],
  source: {
    npm: 'vite-plugin-version-watcher',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-version-watcher',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
