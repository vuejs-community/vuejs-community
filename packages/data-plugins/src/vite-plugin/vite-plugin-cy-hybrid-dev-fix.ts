import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cy-hybrid-dev-fix',
  description: 'vite 套壳开发方式下页面加载两次/白屏的问题',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    '白屏',
    'hybrid',
  ],
  source: {
    npm: 'vite-plugin-cy-hybrid-dev-fix',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-cy-hybrid-dev-fix',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
