import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-taro',
  description: 'Vite 8 plugin for building one React/Taro codebase for WeChat, Alipay, TikTok, and H5 targets.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vpt',
    'vite',
    'vite-plugin',
    'taro',
    'wechat',
    'alipay',
    'tiktok',
    'mini-program',
    'react',
  ],
  links: {
    github: 'https://github.com/sep2/vite-plugin-taro',
    npm: 'https://www.npmjs.com/package/vite-plugin-taro',
    website: 'https://vpt.js.org',
  },
  source: {
    github: 'sep2/vite-plugin-taro',
    npm: 'vite-plugin-taro',
  },
  stats: {
    stars: 51,
    downloads: {
      monthly: 4497,
      weekly: 604,
    },
  },
})
