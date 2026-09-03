import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jiayouzuo/css-scope-vite',
  description: 'Vite插件：通过hash前缀实现CSS作用域隔离，解决模块联邦中的样式冲突',
  version: '0.1.8',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'scope',
    'hash',
    'style-isolation',
    'micro-frontend',
    'module-federation',
    'antd',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@jiayouzuo/css-scope-vite',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 15,
    },
  },
})
