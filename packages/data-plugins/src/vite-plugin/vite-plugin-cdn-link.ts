import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cdn-link',
  description: 'vite public静态资源使用cdn地址',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'cdn',
    'link',
  ],
  source: {
    github: 'HiTeochew/vite-plugin-cdn-link',
    npm: 'vite-plugin-cdn-link',
  },
  links: {
    github: 'https://github.com/HiTeochew/vite-plugin-cdn-link',
    npm: 'https://www.npmjs.com/package/vite-plugin-cdn-link',
    website: 'https://github.com/HiTeochew/vite-plugin-cdn-link',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
