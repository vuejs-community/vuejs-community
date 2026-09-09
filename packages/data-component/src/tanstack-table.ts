import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tanstack-table',
  description: 'Headless 表格逻辑库，排序 / 筛选 / 分组自由组装 UI',
  icon: '',
  category: 'component',
  types: ['table-library'],
  tags: ['headless', 'table'],

  source: {
    github: 'TanStack/table',
    npm: '@tanstack/vue-table',
  },

  links: {
    github: 'https://github.com/TanStack/table',
    npm: 'https://www.npmjs.com/package/@tanstack/vue-table',
  },
  stats: {
    stars: 28418,
    downloads: {
      monthly: 3774002,
      weekly: 879498,
    },
  },
})
