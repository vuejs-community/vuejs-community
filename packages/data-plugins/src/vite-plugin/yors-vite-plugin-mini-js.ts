import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yors/vite-plugin-mini-js',
  description: 'a library package , as vite plugin , to compress js file for bunlding',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    '@yors',
    'vite-plugin',
    'mini-js',
  ],
  links: {
    github: 'https://github.com/ymc-github/vite-ci',
    npm: 'https://www.npmjs.com/package/@yors/vite-plugin-mini-js',
    website: 'https://github.com/ymc-github/vite-ci/blob/main/vite-plugin/mini-js#readme',
  },
  source: {
    github: 'ymc-github/vite-ci',
    npm: '@yors/vite-plugin-mini-js',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
