import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-src',
  description: 'set vite root directory to src and fix other directory',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'src',
    'vite-root',
    'root-src',
    'vite-root-src',
    'vite-plugin',
    'vite-plugin-src',
  ],
  source: {
    github: 'zhuweiyou/vite-plugin-src',
    npm: 'vite-plugin-src',
  },
  links: {
    github: 'https://github.com/zhuweiyou/vite-plugin-src',
    npm: 'https://www.npmjs.com/package/vite-plugin-src',
    website: 'https://github.com/zhuweiyou/vite-plugin-src#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
