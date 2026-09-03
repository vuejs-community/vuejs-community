import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-client-error-logger',
  description: 'Vite 插件：在开发模式下收集浏览器运行时错误并写入本地日志',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'error-logging',
    'sandbox',
    'frontend-monitoring',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-client-error-logger',
  },
  stats: {
    downloads: {
      monthly: 486,
      weekly: 55,
    },
  },
})
