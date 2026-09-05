import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'zag',
  description: '有限状态机驱动的多框架无头组件方案（含 Vue）',
  category: 'ui',
  types: ['headless-ui'],
  tags: ['ui', 'headless-ui', 'state-machine'],

  source: {
    github: 'chakra-ui/zag',
    npm: '@zag-js/vue',
  },

  links: {
    github: 'https://github.com/chakra-ui/zag',
    npm: 'https://www.npmjs.com/package/@zag-js/vue',
  },
  stats: {
    stars: 5202,
    downloads: {
      monthly: 178098,
      weekly: 43674,
    },
  },
})
