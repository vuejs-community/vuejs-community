import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-add-version',
  description: 'vite构建过程中给js和css添加自定义版本号防止缓存',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/liuhean2021/vite-plugin-add-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-add-version',
  },
  stats: {
    downloads: {
      monthly: 118,
      weekly: 9,
    },
  },
})
