import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-prefix-auto',
  description: 'Vite 插件：CSS 作用域隔离，解决微前端和模块联邦中的样式冲突问题',
  version: '0.9.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'scope',
    'style-isolation',
    'micro-frontend',
    'module-federation',
    'postcss',
    'less',
    'scss',
    'sass',
    'babel',
    'jsx',
    'tsx',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-css-prefix-auto',
  },
  stats: {
    downloads: {
      monthly: 103,
      weekly: 16,
    },
  },
})
