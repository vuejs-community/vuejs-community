import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-entry-dag',
  description: 'Vite 插件：从入口路由生成依赖树并记录模块发现顺序',
  icon: 'logos:vite-icon',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'dependency-graph',
    'route',
    'dynamic-import',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-entry-dag',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-entry-dag',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
