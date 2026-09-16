import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-oss-cdn',
  description: '将打包后的静态资源上传至阿里云oss，可先删除指定目录文件（预防一直上传占用空间）兼容vite 4.x 和 5.x 版本',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'ali-oss',
    'aliyun',
    'oss vite',
    'oss-cdn',
    'oss',
    'cdn',
  ],
  source: {
    npm: 'vite-plugin-oss-cdn',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-oss-cdn',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
