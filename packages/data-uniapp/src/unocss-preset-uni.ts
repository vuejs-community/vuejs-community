import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unocss-preset-uni',
  description: 'uni-helper 出品的 UnoCSS 预设，专为 uni-app 多端兼容打造',
  category: 'uniapp',
  types: ['utility-library'],
  tags: ['uni-app', 'vue3', 'unocss', 'css'],

  source: {
    github: 'uni-helper/unocss-preset-uni',
    npm: '@uni-helper/unocss-preset-uni',
  },

  links: {
    github: 'https://github.com/uni-helper/unocss-preset-uni',
    npm: 'https://www.npmjs.com/package/@uni-helper/unocss-preset-uni',
  },

  stats: {
    stars: 128,
    downloads: {
      monthly: 9107,
      weekly: 1917,
    },
  },
})
