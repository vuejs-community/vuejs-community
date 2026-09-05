import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-monitor',
  description: '提供获取启动，HMR时间等简单指标，拦截 --debug 下的所有日志的能力',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'monitor',
    'vite-plugin-monitor',
    'debug',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ATQQ/vite-plugin-monitor',
    npm: 'https://www.npmjs.com/package/vite-plugin-monitor',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
