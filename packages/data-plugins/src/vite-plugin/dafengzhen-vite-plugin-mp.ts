import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dafengzhen/vite-plugin-mp',
  description: 'vite-plugin-mp 使用 Vite 编译微信小程序',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'plugin',
    'weixin',
    'wechat',
    'mini programs',
    'mp',
    'wxml',
    'wxss',
  ],
  source: {
    github: 'dafengzhen/vite-plugin-mp',
    npm: '@dafengzhen/vite-plugin-mp',
  },
  links: {
    github: 'https://github.com/dafengzhen/vite-plugin-mp',
    npm: 'https://www.npmjs.com/package/@dafengzhen/vite-plugin-mp',
    website: 'https://github.com/dafengzhen/vite-plugin-mp#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
