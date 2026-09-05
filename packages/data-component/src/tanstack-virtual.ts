import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tanstack-virtual',
  description: 'Headless 虚拟滚动库，列表 / 网格通吃',
  category: 'component',
  types: ['component-library'],
  tags: ['virtual-scroll', 'headless'],

  source: {
    github: 'TanStack/virtual',
    npm: '@tanstack/vue-virtual',
  },

  links: {
    github: 'https://github.com/TanStack/virtual',
    npm: 'https://www.npmjs.com/package/@tanstack/vue-virtual',
  },
  stats: {
    stars: 7098,
    downloads: {
      monthly: 12609680,
      weekly: 3342014,
    },
  },
})
