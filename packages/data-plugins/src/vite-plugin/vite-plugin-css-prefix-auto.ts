import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-prefix-auto',
  description: 'Vite 插件：CSS 作用域隔离，解决微前端和模块联邦中的样式冲突问题',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: 'vite-plugin-css-prefix-auto',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-css-prefix-auto',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 6,
    },
  },
})
