import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-base-output',
  description: 'Vite 插件：根据 base 配置将构建产物输出到 dist/<base>/ 目录，便于子路径部署',
  version: '1.0.3',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-base-output',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 0,
    },
  },
})
