import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@easyfe/vite-plugin-upload',
  description: '基于vite的，上传资源到阿里云、腾讯云、minio等存储服务',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/easyfe/vite-plugin-upload',
    npm: 'https://www.npmjs.com/package/@easyfe/vite-plugin-upload',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 9,
    },
  },
})
