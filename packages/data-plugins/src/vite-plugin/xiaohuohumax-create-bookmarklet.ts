import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xiaohuohumax/create-bookmarklet',
  description: 'create a bookmarklet for vite project',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'bookmarklet',
  ],
  links: {
    github: 'https://github.com/xiaohuohumax/vite-plugin-bookmarklet',
    npm: 'https://www.npmjs.com/package/@xiaohuohumax/create-bookmarklet',
    website: 'https://github.com/xiaohuohumax/vite-plugin-bookmarklet/tree/main/packages/create-bookmarklet#readme',
  },
  source: {
    github: 'xiaohuohumax/vite-plugin-bookmarklet',
    npm: '@xiaohuohumax/create-bookmarklet',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
