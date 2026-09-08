import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-taro',
  description: 'Vite 8 plugin for building one React/Taro codebase for WeChat, Alipay, and H5 targets.',
  icon: 'logos:vite-icon',
  version: '0.7.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'taro',
    'wechat',
    'alipay',
    'mini-program',
    'react',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'sep2/vite-plugin-taro',
    npm: 'vite-plugin-taro',
  },
  links: {
    github: 'https://github.com/sep2/vite-plugin-taro',
    npm: 'https://www.npmjs.com/package/vite-plugin-taro',
  },
  stats: {
    downloads: {
      monthly: 6162,
      weekly: 934,
    },
  },
})
