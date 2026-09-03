import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@yors/vite-plugin-make-type',
  description: 'a library package, as vite plugin, to generate d.ts file',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    '@yors',
    'vite-plugin',
    'mini-js',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ymc-github/vite-ci',
    npm: 'https://www.npmjs.com/package/@yors/vite-plugin-make-type',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 4,
    },
  },
})
