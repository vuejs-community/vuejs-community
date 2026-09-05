import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'notivue',
  description: '零依赖、高度可定制的 toast 通知系统',
  category: 'component',
  types: ['component-library'],
  tags: ['toast', 'notification'],

  source: {
    github: 'smastrom/notivue',
    npm: 'notivue',
  },

  links: {
    github: 'https://github.com/smastrom/notivue',
    npm: 'https://www.npmjs.com/package/notivue',
  },
  stats: {
    stars: 873,
    downloads: {
      monthly: 71688,
      weekly: 18926,
    },
  },
})
