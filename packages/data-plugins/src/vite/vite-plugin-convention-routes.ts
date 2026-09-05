import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-convention-routes',
  description: '一个类似Umi的约定式路由Vite插件，自动根据文件结构生成路由配置，支持多级动态路由参数、布局组件、元数据和懒加载',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'routes',
    'convention-routes',
    'file-system-routes',
    'vue-router',
    'nested-routes',
    'dynamic-routes',
    'layout-routes',
    'lazy-loading',
    'route-meta',
    'meta-data',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/zhourusheng/vite-plugin-convention-routes',
    npm: 'https://www.npmjs.com/package/vite-plugin-convention-routes',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
