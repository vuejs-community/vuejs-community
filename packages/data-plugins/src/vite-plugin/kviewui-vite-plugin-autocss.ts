import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kviewui/vite-plugin-autocss',
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
  links: {
    npm: 'https://www.npmjs.com/package/@kviewui/vite-plugin-autocss',
    website: 'https://gitcode.net/kviewui/vite-plugin-autocss',
  },
  source: {
    npm: '@kviewui/vite-plugin-autocss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
