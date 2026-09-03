import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@shaojc/vite-plugin-ali-oss',
  description: 'Upload the production files bundled in the project to Ali OSS, except for html',
  version: '1.1.1',
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
    github: 'https://github.com/shaojingchao/vite-plugin-ali-oss',
    npm: 'https://www.npmjs.com/package/@shaojc/vite-plugin-ali-oss',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 0,
    },
  },
})
