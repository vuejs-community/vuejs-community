import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-entry-dag',
  description: 'Vite 插件：从入口路由生成依赖树并记录模块发现顺序',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'dependency-graph',
    'route',
    'dynamic-import',
  ],
  source: {
    npm: 'vite-plugin-entry-dag',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-entry-dag',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
