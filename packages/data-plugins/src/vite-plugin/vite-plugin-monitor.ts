import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-monitor',
  description: '提供获取启动，HMR时间等简单指标，拦截 --debug 下的所有日志的能力',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'monitor',
    'vite-plugin-monitor',
    'debug',
  ],
  links: {
    github: 'https://github.com/ATQQ/vite-plugin-monitor',
    npm: 'https://www.npmjs.com/package/vite-plugin-monitor',
    website: 'https://github.com/ATQQ/vite-plugin-monitor/tree/main/#readme',
  },
  source: {
    github: 'ATQQ/vite-plugin-monitor',
    npm: 'vite-plugin-monitor',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
