import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'quasar',
  description: '一套代码构建 SPA / SSR / PWA / 移动端 / 桌面端的 Vue 框架',
  category: 'ui',
  types: ['ui-library', 'mobile-framework', 'desktop-framework', 'pwa-framework'],
  tags: ['ui', 'cross-platform'],

  source: {
    github: 'quasarframework/quasar',
    npm: 'quasar',
  },

  links: {
    github: 'https://github.com/quasarframework/quasar',
    npm: 'https://www.npmjs.com/package/quasar',
    website: 'https://quasar.dev',
  },
  stats: {
    stars: 27206,
    downloads: {
      monthly: 1354331,
      weekly: 368445,
    },
  },
})
