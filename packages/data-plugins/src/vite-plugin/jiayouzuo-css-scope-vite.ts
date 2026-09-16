import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jiayouzuo/css-scope-vite',
  description: 'Vite插件：通过hash前缀实现CSS作用域隔离，解决模块联邦中的样式冲突',
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
    'hash',
    'style-isolation',
    'micro-frontend',
    'module-federation',
    'antd',
  ],
  source: {
    npm: '@jiayouzuo/css-scope-vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@jiayouzuo/css-scope-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
