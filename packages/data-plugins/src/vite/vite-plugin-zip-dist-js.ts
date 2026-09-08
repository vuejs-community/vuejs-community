import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zip-dist-js',
  description: '用于在打包后将打包文件压缩为zip文件',
  icon: 'logos:vite-icon',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'zip',
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-zip-dist-js',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-zip-dist-js',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 0,
    },
  },
})
