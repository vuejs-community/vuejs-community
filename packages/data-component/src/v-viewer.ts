import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'v-viewer',
  description: '基于 viewer.js 的图片查看器，支持旋转 / 缩放',
  category: 'component',
  types: ['component-library'],
  tags: ['image', 'viewer'],

  source: {
    github: 'mirari/v-viewer',
    npm: 'v-viewer',
  },

  links: {
    github: 'https://github.com/mirari/v-viewer',
    npm: 'https://www.npmjs.com/package/v-viewer',
  },
  stats: {
    stars: 2638,
    downloads: {
      monthly: 170777,
      weekly: 40959,
    },
  },
})
