import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@plugin-web-update-notify/vite',
  description: 'Web 页面更新通知插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    '@plugin-web-update-notify/vite',
    'web-update-notify',
  ],
  links: {
    github: 'https://github.com/kjhy/plugin-web-update-notify',
    npm: 'https://www.npmjs.com/package/@plugin-web-update-notify/vite',
    website: 'https://github.com/kjhy/plugin-web-update-notify',
  },
  source: {
    github: 'kjhy/plugin-web-update-notify',
    npm: '@plugin-web-update-notify/vite',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 30,
      weekly: 2,
    },
  },
})
