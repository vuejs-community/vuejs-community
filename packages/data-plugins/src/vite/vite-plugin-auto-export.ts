import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-export',
  description: '指定文件夹内的数据自动导出，适用于i18n的国际化配置',
  version: '0.0.18',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'auto-export',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-export',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 0,
    },
  },
})
