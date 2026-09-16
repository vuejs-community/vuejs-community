import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ireneliaoliao/vite-plugin-pages',
  description: '📄 Vite 插件：自动扫描 pages 目录生成路由配置',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'pages',
    'routes',
    'auto-import',
  ],
  source: {
    npm: '@ireneliaoliao/vite-plugin-pages',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@ireneliaoliao/vite-plugin-pages',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 16,
    },
  },
})
