import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-autocss',
  description: '基于vite的HMR机制，根据页面class自动生成css文件的vite插件',
  icon: 'logos:vite-icon',
  version: '1.0.5',
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
  source: {
    github: '',
    npm: 'vite-plugin-autocss',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-autocss',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
