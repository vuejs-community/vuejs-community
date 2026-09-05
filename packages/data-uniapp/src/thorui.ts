import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'thorui',
  description: 'ThorUI 轻量级小程序 / uni-app 组件库（更新较少）',
  category: 'uniapp',
  types: ['mobile-ui', 'component-collection'],
  tags: ['uni-app', 'ui', 'mobile', 'miniprogram'],

  source: {
    github: 'dingyong0214/ThorUI',
    npm: 'thorui-uni',
  },

  links: {
    github: 'https://github.com/dingyong0214/ThorUI',
    npm: 'https://www.npmjs.com/package/thorui-uni',
    website: 'https://www.thorui.cn/doc',
  },

  stats: {
    stars: 1154,
    downloads: {
      monthly: 248,
      weekly: 59,
    },
  },
})
