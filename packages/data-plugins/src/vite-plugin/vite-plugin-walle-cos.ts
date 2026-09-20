import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-walle-cos',
  description: 'Upload the production files bundled in the project to Tencent COS, except for html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'walle-cos',
    'tencent',
  ],
  links: {
    github: 'https://github.com/choukin/vite-plugin-walle-cos',
    npm: 'https://www.npmjs.com/package/vite-plugin-walle-cos',
    website: 'https://github.com/choukin/vite-plugin-walle-cos',
  },
  source: {
    github: 'choukin/vite-plugin-walle-cos',
    npm: 'vite-plugin-walle-cos',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 37,
      weekly: 7,
    },
  },
})
