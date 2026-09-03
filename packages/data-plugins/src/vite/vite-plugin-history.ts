import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-history',
  description: '`Vite` 功能增强插件，对 `connect-history-api-fallback` 的二次封装。主要解决路径访问 `url` 重写等问题。',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite-plugin-history',
    'multi-page-history',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wuyaoxing/vite-plugin-history',
    npm: 'https://www.npmjs.com/package/vite-plugin-history',
  },
  stats: {
    downloads: {
      monthly: 609,
      weekly: 97,
    },
  },
})
