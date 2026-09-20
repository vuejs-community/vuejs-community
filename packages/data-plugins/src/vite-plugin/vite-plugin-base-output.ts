import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-base-output',
  description: 'Vite 插件：根据 base 配置将构建产物输出到 dist/<base>/ 目录，便于子路径部署',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'base',
    'output',
    'build',
    'subpath',
    'deployment',
    'dist',
    'public-path',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-base-output',
  },
  source: {
    npm: 'vite-plugin-base-output',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
