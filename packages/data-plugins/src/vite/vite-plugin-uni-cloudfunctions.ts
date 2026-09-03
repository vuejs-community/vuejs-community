import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uni-cloudfunctions',
  description: 'Vite plugin that compiles TypeScript WeChat cloud functions into self-contained deploy units and syncs them to the mp-weixin output directory, enabling uni-app cloud function development without HBuilderX. 在纯 Vite 工作流（如 unh）中开发 uni-app 微信小程序云函数。',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'uni-app',
    'uniapp',
    'mp-weixin',
    'wechat',
    'weixin',
    'miniprogram',
    'cloud-functions',
    'cloudfunctions',
    'wx-server-sdk',
    'tcb',
    'cloudbase',
    'serverless',
    '微信小程序',
    '云函数',
    'uni-helper',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/JsonLee12138/vite-plugin-uni-cloudfunctions',
    npm: 'https://www.npmjs.com/package/vite-plugin-uni-cloudfunctions',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 1,
    },
  },
})
