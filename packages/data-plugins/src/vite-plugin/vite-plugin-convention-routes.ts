import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-convention-routes',
  description: '一个类似Umi的约定式路由Vite插件，自动根据文件结构生成路由配置，支持多级动态路由参数、布局组件、元数据和懒加载',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/zhourusheng/vite-plugin-convention-routes',
    npm: 'https://www.npmjs.com/package/vite-plugin-convention-routes',
    website: 'https://github.com/zhourusheng/vite-plugin-convention-routes',
  },
  source: {
    github: 'zhourusheng/vite-plugin-convention-routes',
    npm: 'vite-plugin-convention-routes',
  },
  stats: {
    stars: 160,
    downloads: {
      monthly: 30,
      weekly: 4,
    },
  },
})
