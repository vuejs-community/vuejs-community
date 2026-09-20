import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@m-f2e/vite-plugin-import-antd',
  description: '从antd中按需引入组件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/m-f2e/vite-plugin-import-antd',
    npm: 'https://www.npmjs.com/package/@m-f2e/vite-plugin-import-antd',
    website: 'https://github.com/m-f2e/vite-plugin-import-antd#readme',
  },
  source: {
    github: 'm-f2e/vite-plugin-import-antd',
    npm: '@m-f2e/vite-plugin-import-antd',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
