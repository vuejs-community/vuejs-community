import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-oss-cdn',
  description: '将打包后的静态资源上传至阿里云oss，可先删除指定目录文件（预防一直上传占用空间）兼容vite 4.x 和 5.x 版本',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'ali-oss',
    'aliyun',
    'oss vite',
    'oss-cdn',
    'oss',
    'cdn',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-oss-cdn',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
