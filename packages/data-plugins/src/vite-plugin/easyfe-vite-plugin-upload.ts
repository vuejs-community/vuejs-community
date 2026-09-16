import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@easyfe/vite-plugin-upload',
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
  source: {
    github: 'easyfe/vite-plugin-upload',
    npm: '@easyfe/vite-plugin-upload',
  },
  links: {
    github: 'https://github.com/easyfe/vite-plugin-upload',
    npm: 'https://www.npmjs.com/package/@easyfe/vite-plugin-upload',
    website: 'https://github.com/easyfe/vite-plugin-upload#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 33,
      weekly: 6,
    },
  },
})
