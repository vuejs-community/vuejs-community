import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-flow',
  description: 'Vue 3 流程图组件，缩放平移、小地图、节点连线开箱即用',
  category: 'component',
  types: ['component-library'],
  tags: ['flow', 'diagram'],

  source: {
    github: 'bcakmakoglu/vue-flow',
    npm: '@vue-flow/core',
  },

  links: {
    github: 'https://github.com/bcakmakoglu/vue-flow',
    npm: 'https://www.npmjs.com/package/@vue-flow/core',
  },
  stats: {
    stars: 6823,
    downloads: {
      monthly: 2029844,
      weekly: 557972,
    },
  },
})
