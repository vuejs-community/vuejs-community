import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yors/vite-plugin-make-type',
  description: 'a library package, as vite plugin, to generate d.ts file',
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
    npm: 'https://www.npmjs.com/package/@yors/vite-plugin-make-type',
    website: 'https://github.com/ymc-github/vite-ci/blob/main/vite-plugin/make-type#readme',
  },
  source: {
    github: 'ymc-github/vite-ci',
    npm: '@yors/vite-plugin-make-type',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
