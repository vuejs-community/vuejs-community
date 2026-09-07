import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nutui',
  description: '京东风格的移动端组件库，支持多端小程序',
  icon: '',
  category: 'ui',
  types: ['mobile-ui'],
  tags: ['ui', 'mobile', 'miniprogram'],

  source: {
    github: 'jd-opensource/nutui',
    npm: '@nutui/nutui',
  },

  links: {
    github: 'https://github.com/jd-opensource/nutui',
    npm: 'https://www.npmjs.com/package/@nutui/nutui',
    website: 'https://nutui.jd.com',
  },
  stats: {
    stars: 6510,
    downloads: {
      monthly: 12841,
      weekly: 3702,
    },
  },
})
