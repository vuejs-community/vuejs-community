import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-autocss-generator',
  description: '基于vite的HMR机制，根据页面class自动生成css文件的vite插件',
  version: '1.0.0-beta.15',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-autocss-generator',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
