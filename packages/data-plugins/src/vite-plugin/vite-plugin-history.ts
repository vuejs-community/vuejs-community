import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-history',
  description: '`Vite` 功能增强插件，对 `connect-history-api-fallback` 的二次封装。主要解决路径访问 `url` 重写等问题。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-history',
    'multi-page-history',
  ],
  source: {
    github: 'wuyaoxing/vite-plugin-history',
    npm: 'vite-plugin-history',
  },
  links: {
    github: 'https://github.com/wuyaoxing/vite-plugin-history',
    npm: 'https://www.npmjs.com/package/vite-plugin-history',
    website: 'https://github.com/wuyaoxing/vite-plugin-history',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 462,
      weekly: 87,
    },
  },
})
