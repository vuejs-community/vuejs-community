import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-antd3',
  description: '这是用于antd3迁移vite时使用的插件',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'xyl66/rollup-plugin-requiretoimport',
    npm: 'vite-plugin-antd3',
  },
  links: {
    github: 'https://github.com/xyl66/rollup-plugin-requiretoimport',
    npm: 'https://www.npmjs.com/package/vite-plugin-antd3',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 3,
    },
  },
})
