import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'arco-design-vue',
  description: '字节跳动 Arco Design 的 Vue 3 实现',
  category: 'ui',
  types: ['ui-library'],
  tags: ['ui', 'arco-design'],

  source: {
    github: 'arco-design/arco-design-vue',
    npm: '@arco-design/web-vue',
  },

  links: {
    github: 'https://github.com/arco-design/arco-design-vue',
    npm: 'https://www.npmjs.com/package/@arco-design/web-vue',
    website: 'https://arco.design/vue',
  },
  stats: {
    stars: 3106,
    downloads: {
      monthly: 214191,
      weekly: 23201,
    },
  },
})
