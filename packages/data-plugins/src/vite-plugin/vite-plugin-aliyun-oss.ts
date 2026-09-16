import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-aliyun-oss',
  description: '在项目中引入此插件便可在打包时自动将打包后的js文件上传到阿里云oss上去，然后就可以进行CDN加速以及其他处理。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'vite-plugin',
    'aliyun',
    'oss',
  ],
  source: {
    npm: 'vite-plugin-aliyun-oss',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-aliyun-oss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
