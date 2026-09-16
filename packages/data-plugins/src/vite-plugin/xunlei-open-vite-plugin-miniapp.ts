import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xunlei-open/vite-plugin-miniapp',
  description: 'Vite plugin for building Xunlei Miniapps',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'xunlei',
    'miniapp',
  ],
  source: {
    github: 'xunlei-open/miniapp-devkit',
    npm: '@xunlei-open/vite-plugin-miniapp',
  },
  links: {
    github: 'https://github.com/xunlei-open/miniapp-devkit',
    npm: 'https://www.npmjs.com/package/@xunlei-open/vite-plugin-miniapp',
    website: 'https://github.com/xunlei-open/miniapp-devkit#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 287,
      weekly: 287,
    },
  },
})
