import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-client-error-logger',
  description: 'Vite 插件：在开发模式下收集浏览器运行时错误并写入本地日志',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'error-logging',
    'sandbox',
    'frontend-monitoring',
  ],
  source: {
    npm: 'vite-plugin-client-error-logger',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-client-error-logger',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 337,
      weekly: 16,
    },
  },
})
