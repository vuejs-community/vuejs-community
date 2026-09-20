import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iconfont',
  description: 'This plugin is for auto download iconfont symbol js file',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'iconfont',
    'iconify',
  ],
  links: {
    github: 'https://github.com/eliduty/plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-iconfont',
    website: 'https://github.com/eliduty/plugin/blob/main/packages/vite-plugin-iconfont/README.md',
  },
  source: {
    github: 'eliduty/plugin',
    npm: 'vite-plugin-iconfont',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 5,
    },
  },
})
