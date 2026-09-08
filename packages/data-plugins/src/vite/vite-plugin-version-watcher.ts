import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-watcher',
  description: 'Vite 插件：自动检测前端版本更新并提示用户刷新页面',
  icon: 'logos:vite-icon',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'update',
    'watcher',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-version-watcher',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-watcher',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
