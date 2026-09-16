import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-export',
  description: '指定文件夹内的数据自动导出，适用于i18n的国际化配置',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'auto-export',
  ],
  source: {
    npm: 'vite-plugin-auto-export',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-export',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
