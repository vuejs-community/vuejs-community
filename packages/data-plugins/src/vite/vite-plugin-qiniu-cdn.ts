import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-qiniu-cdn',
  description: 'vite 打包完成后上传七牛插件',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'qiniu',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/liliuzhu/vite-plugin-qiniu-cdn',
    npm: 'https://www.npmjs.com/package/vite-plugin-qiniu-cdn',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
