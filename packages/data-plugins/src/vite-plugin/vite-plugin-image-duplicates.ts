import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-duplicates',
  description: '查找项目中是否有重复图片',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'image',
    'duplicates',
  ],
  links: {
    github: 'https://github.com/wgbx/vite-plugin-image-duplicates',
    npm: 'https://www.npmjs.com/package/vite-plugin-image-duplicates',
    website: 'https://github.com/wgbx/vite-plugin-image-duplicates',
  },
  source: {
    github: 'wgbx/vite-plugin-image-duplicates',
    npm: 'vite-plugin-image-duplicates',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
