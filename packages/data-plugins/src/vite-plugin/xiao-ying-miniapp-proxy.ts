import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xiao-ying/miniapp-proxy',
  description: 'Standalone dev proxy server and Vite plugin for XiaoYing miniapp SDK',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'proxy',
    'dev-proxy',
    'xiaoying',
  ],
  source: {
    npm: '@xiao-ying/miniapp-proxy',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xiao-ying/miniapp-proxy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 38,
      weekly: 6,
    },
  },
})
