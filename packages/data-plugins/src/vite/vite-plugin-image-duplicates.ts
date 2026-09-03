import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-duplicates',
  description: '查找项目中是否有重复图片',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'image',
    'duplicates',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wgbx/vite-plugin-image-duplicates',
    npm: 'https://www.npmjs.com/package/vite-plugin-image-duplicates',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
