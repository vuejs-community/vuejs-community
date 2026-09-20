import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@h5easy/vite-plugin-upload',
  description: '基于vite的，上传资源到阿里云、腾讯云、minio等存储服务',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/h5easy/vite-plugin-upload',
    npm: 'https://www.npmjs.com/package/@h5easy/vite-plugin-upload',
    website: 'https://github.com/h5easy/vite-plugin-upload#readme',
  },
  source: {
    github: 'h5easy/vite-plugin-upload',
    npm: '@h5easy/vite-plugin-upload',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 6,
    },
  },
})
