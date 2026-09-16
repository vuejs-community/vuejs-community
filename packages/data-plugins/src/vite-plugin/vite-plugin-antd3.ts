import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-antd3',
  description: '这是用于antd3迁移vite时使用的插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'xyl66/rollup-plugin-requiretoimport',
    npm: 'vite-plugin-antd3',
  },
  links: {
    github: 'https://github.com/xyl66/rollup-plugin-requiretoimport',
    npm: 'https://www.npmjs.com/package/vite-plugin-antd3',
    website: 'https://github.com/xyl66/vite-plugin-antd3',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
