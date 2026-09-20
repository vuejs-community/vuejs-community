import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yuo/vite-plugin-svg-icons',
  description: '@yuo/vite依赖插件，sprite技术',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    '@yuo/vite',
    'vite',
    'vite-plugin',
    'svg',
    'sprite',
    'svgo',
    'vben',
  ],
  links: {
    github: 'https://github.com/anncwb/vite-plugin-svg-icons',
    npm: 'https://www.npmjs.com/package/@yuo/vite-plugin-svg-icons',
    website: 'https://github.com/anncwb/vite-plugin-svg-icons/tree/master/#readme',
  },
  source: {
    github: 'anncwb/vite-plugin-svg-icons',
    npm: '@yuo/vite-plugin-svg-icons',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
