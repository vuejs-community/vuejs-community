import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kviewui/vite-plugin-autocss',
  description: '基于vite的HMR机制，根据页面class自动生成css文件的vite插件',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'autocss',
    'css',
    'vite',
    'uniapp',
    'vue',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@kviewui/vite-plugin-autocss',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
