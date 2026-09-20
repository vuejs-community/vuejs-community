import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hughcube/uni-pretty-url',
  description: '让 uni-app H5 拥有干净的 URL——去掉 /pages/ 前缀、支持路径参数别名',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/hughcube/uni-pretty-url',
    npm: 'https://www.npmjs.com/package/@hughcube/uni-pretty-url',
    website: 'https://github.com/hughcube/uni-pretty-url#readme',
  },
  source: {
    github: 'hughcube/uni-pretty-url',
    npm: '@hughcube/uni-pretty-url',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 27,
      weekly: 10,
    },
  },
})
