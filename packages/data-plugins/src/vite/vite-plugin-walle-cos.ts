import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-walle-cos',
  description: 'Upload the production files bundled in the project to Tencent COS, except for html',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'walle-cos',
    'tencent',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'choukin/vite-plugin-walle-cos',
    npm: 'vite-plugin-walle-cos',
  },
  links: {
    github: 'https://github.com/choukin/vite-plugin-walle-cos',
    npm: 'https://www.npmjs.com/package/vite-plugin-walle-cos',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 4,
    },
  },
})
