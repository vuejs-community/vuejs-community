import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iconfont',
  description: 'This plugin is for auto download iconfont symbol js file',
  icon: 'logos:vite-icon',
  version: '1.5.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'iconfont',
    'iconify',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'eliduty/plugin',
    npm: 'vite-plugin-iconfont',
  },
  links: {
    github: 'https://github.com/eliduty/plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-iconfont',
  },
  stats: {
    downloads: {
      monthly: 120,
      weekly: 12,
    },
  },
})
