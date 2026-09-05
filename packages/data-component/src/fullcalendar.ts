import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'fullcalendar',
  description: '全功能日历组件，官方 @fullcalendar/vue3 适配',
  category: 'component',
  types: ['component-library'],
  tags: ['calendar'],

  source: {
    github: 'fullcalendar/fullcalendar',
    npm: '@fullcalendar/vue3',
  },

  links: {
    github: 'https://github.com/fullcalendar/fullcalendar',
    npm: 'https://www.npmjs.com/package/@fullcalendar/vue3',
  },
  stats: {
    stars: 20628,
    downloads: {
      monthly: 877264,
      weekly: 207859,
    },
  },
})
