import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@orca-studio/vite-plugin-ali-oss',
  description: 'Upload the production files bundled in the project to Ali OSS, except for html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'ali-oss',
    'aliyun',
  ],
  source: {
    github: 'xiaweiss/vite-plugin-ali-oss',
    npm: '@orca-studio/vite-plugin-ali-oss',
  },
  links: {
    github: 'https://github.com/xiaweiss/vite-plugin-ali-oss',
    npm: 'https://www.npmjs.com/package/@orca-studio/vite-plugin-ali-oss',
    website: 'https://github.com/xiaweiss/vite-plugin-ali-oss',
  },
  stats: {
    stars: 43,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
