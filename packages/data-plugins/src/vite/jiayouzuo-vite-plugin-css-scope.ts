import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jiayouzuo/vite-plugin-css-scope',
  description: 'Vite 插件：CSS 作用域隔离，解决微前端和模块联邦中的样式冲突问题',
  version: '0.1.9',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'scope',
    'style-isolation',
    'micro-frontend',
    'module-federation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@jiayouzuo/vite-plugin-css-scope',
  },
  stats: {
    downloads: {
      monthly: 519,
      weekly: 19,
    },
  },
})
