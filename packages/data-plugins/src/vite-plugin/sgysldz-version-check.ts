import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sgysldz/version-check',
  description: '前端版本更新检测：构建期生成版本元信息，运行时比对并触发整页刷新',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'force-refresh',
    'update',
    'version',
    'vite',
    'vite-plugin',
    'vue',
    'vue-router',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@sgysldz/version-check',
  },
  source: {
    npm: '@sgysldz/version-check',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
