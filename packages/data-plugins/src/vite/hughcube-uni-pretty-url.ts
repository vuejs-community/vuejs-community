import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@hughcube/uni-pretty-url',
  description: '让 uni-app H5 拥有干净的 URL——去掉 /pages/ 前缀、支持路径参数别名',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'uni-app',
    'vue-router',
    'clean-url',
    'pretty-url',
    'h5',
    'url-rewrite',
    'seo',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hughcube/uni-pretty-url',
    npm: 'https://www.npmjs.com/package/@hughcube/uni-pretty-url',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 6,
    },
  },
})
