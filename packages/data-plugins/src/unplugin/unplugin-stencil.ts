import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-stencil',
  description: 'An Unplugin that wraps Stencil compiler for Vite, Webpack, Rollup, and more',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/stencil-community/unplugin-stencil',
    npm: 'https://www.npmjs.com/package/unplugin-stencil',
  },
  stats: {
    downloads: {
      monthly: 2448,
      weekly: 395,
    },
  },
})
