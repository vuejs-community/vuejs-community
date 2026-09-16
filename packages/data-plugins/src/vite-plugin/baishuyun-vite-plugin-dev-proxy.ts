import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@baishuyun/vite-plugin-dev-proxy',
  description: '百数 Vite 开发代理插件：serve 时交互选择 API 代理环境',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'proxy',
    'baishu',
  ],
  source: {
    npm: '@baishuyun/vite-plugin-dev-proxy',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@baishuyun/vite-plugin-dev-proxy',
    website: 'https://gitlab.baishuyun.com/bsy/bsy-ui-monorepo',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 247,
      weekly: 5,
    },
  },
})
