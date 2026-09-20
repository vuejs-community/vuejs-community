import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uniapp-routes',
  description: '一个根据 pages.json 自动生成路由枚举文件的 Vite 插件。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-uniapp-routes',
  },
  source: {
    npm: 'vite-plugin-uniapp-routes',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
