import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@open-wxa/unplugin-wxa-runner',
  description: 'Vite / webpack plugin that runs uni-app and Taro mp-weixin builds in wxa-runner, with optional runner extensions',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'miniprogram',
    'taro',
    'uni-app',
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
    'wxa-runner',
  ],
  links: {
    github: 'https://github.com/open-wxa/wxa-extensions',
    npm: 'https://www.npmjs.com/package/@open-wxa/unplugin-wxa-runner',
    website: 'https://github.com/open-wxa/wxa-extensions/tree/main/packages/unplugin#readme',
  },
  source: {
    github: 'open-wxa/wxa-extensions',
    npm: '@open-wxa/unplugin-wxa-runner',
  },
})
