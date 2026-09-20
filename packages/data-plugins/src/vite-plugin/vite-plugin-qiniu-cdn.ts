import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-qiniu-cdn',
  description: 'vite 打包完成后上传七牛插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'qiniu',
  ],
  links: {
    github: 'https://github.com/liliuzhu/vite-plugin-qiniu-cdn',
    npm: 'https://www.npmjs.com/package/vite-plugin-qiniu-cdn',
    website: 'https://github.com/liliuzhu/vite-plugin-qiniu-cdn.git#readme',
  },
  source: {
    github: 'liliuzhu/vite-plugin-qiniu-cdn',
    npm: 'vite-plugin-qiniu-cdn',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
