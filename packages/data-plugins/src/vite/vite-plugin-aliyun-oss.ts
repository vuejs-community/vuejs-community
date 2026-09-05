import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-aliyun-oss',
  description: '在项目中引入此插件便可在打包时自动将打包后的js文件上传到阿里云oss上去，然后就可以进行CDN加速以及其他处理。',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'vite-plugin',
    'aliyun',
    'oss',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-aliyun-oss',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
