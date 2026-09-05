import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unovis',
  description: '模块化数据可视化框架，图表 / 地图 / 时间线一体',
  category: 'component',
  types: ['visualization'],
  tags: ['chart', 'map'],

  source: {
    github: 'f5/unovis',
    npm: '@unovis/vue',
  },

  links: {
    github: 'https://github.com/f5/unovis',
    npm: 'https://www.npmjs.com/package/@unovis/vue',
  },
  stats: {
    stars: 2845,
    downloads: {
      monthly: 700862,
      weekly: 172137,
    },
  },
})
