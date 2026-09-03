import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@h5easy/vite-plugin-upload',
  description: '基于vite的，上传资源到阿里云、腾讯云、minio等存储服务',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/h5easy/vite-plugin-upload',
    npm: 'https://www.npmjs.com/package/@h5easy/vite-plugin-upload',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 6,
    },
  },
})
