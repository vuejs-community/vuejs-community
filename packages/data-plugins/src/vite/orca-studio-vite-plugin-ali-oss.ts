import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@orca-studio/vite-plugin-ali-oss',
  description: 'Upload the production files bundled in the project to Ali OSS, except for html',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'ali-oss',
    'aliyun',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xiaweiss/vite-plugin-ali-oss',
    npm: 'https://www.npmjs.com/package/@orca-studio/vite-plugin-ali-oss',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
