import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tdesign-miniprogram',
  description: '腾讯 TDesign 的微信小程序组件库，同时适配 uni-app，企业级设计体系',
  category: 'uniapp',
  types: ['ui-library', 'mobile-ui'],
  tags: ['uni-app', 'miniprogram', 'ui', 'mobile', 'tdesign'],

  source: {
    github: 'Tencent/tdesign-miniprogram',
    npm: 'tdesign-miniprogram',
  },

  links: {
    github: 'https://github.com/Tencent/tdesign-miniprogram',
    npm: 'https://www.npmjs.com/package/tdesign-miniprogram',
    website: 'https://tdesign.tencent.com',
  },

  stats: {
    stars: 1753,
    downloads: {
      monthly: 43081,
      weekly: 7732,
    },
  },
})
