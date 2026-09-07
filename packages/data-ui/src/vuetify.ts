import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vuetify',
  description: 'Material Design 组件框架，v3 全面支持 Vue 3',
  icon: 'logos:vuetifyjs',
  category: 'ui',
  types: ['ui-library'],
  tags: ['ui', 'material-design'],

  source: {
    github: 'vuetifyjs/vuetify',
    npm: 'vuetify',
  },

  links: {
    github: 'https://github.com/vuetifyjs/vuetify',
    npm: 'https://www.npmjs.com/package/vuetify',
    website: 'https://vuetifyjs.com',
  },
  stats: {
    stars: 41039,
    downloads: {
      monthly: 3823178,
      weekly: 905416,
    },
  },
})
