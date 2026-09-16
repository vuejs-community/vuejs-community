import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-autocss-generator',
  description: '基于vite的HMR机制，根据页面class自动生成css文件的vite插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'autocss',
    'css',
    'vite',
    'uniapp',
    'vue',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-autocss-generator',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-autocss-generator',
    website: 'https://gitee.com/bad_-code/vite-plugin-autocss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 3,
    },
  },
})
