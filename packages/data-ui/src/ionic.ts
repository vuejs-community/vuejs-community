import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ionic',
  description: '跨平台 iOS / Android / PWA UI 工具包，支持 Vue',
  category: 'ui',
  types: ['mobile-framework', 'ui-library'],
  tags: ['ui', 'mobile', 'capacitor'],

  source: {
    github: 'ionic-team/ionic-framework',
    npm: '@ionic/vue',
  },

  links: {
    github: 'https://github.com/ionic-team/ionic-framework',
    npm: 'https://www.npmjs.com/package/@ionic/vue',
    website: 'https://ionicframework.com',
  },
  stats: {
    stars: 52645,
    downloads: {
      monthly: 261566,
      weekly: 60689,
    },
  },
})
