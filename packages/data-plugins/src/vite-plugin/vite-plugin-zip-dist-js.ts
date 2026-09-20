import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zip-dist-js',
  description: '用于在打包后将打包文件压缩为zip文件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'zip',
    'vite-plugin',
    'vite',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-zip-dist-js',
  },
  source: {
    npm: 'vite-plugin-zip-dist-js',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
