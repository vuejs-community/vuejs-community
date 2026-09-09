import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'arco-design-vue',
  description: '字节跳动 Arco Design 的 Vue 3 实现',
  icon: 'icon:arco',
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
    stars: 3107,
    downloads: {
      monthly: 170289,
      weekly: 29634,
    },
  },
})
