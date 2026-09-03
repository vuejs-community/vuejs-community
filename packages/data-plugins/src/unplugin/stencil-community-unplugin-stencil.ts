import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@stencil-community/unplugin-stencil',
  description: 'An Unplugin that wraps Stencil compiler for Vite, Webpack, Rollup, and more',
  version: '0.5.2',
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
    npm: 'https://www.npmjs.com/package/@stencil-community/unplugin-stencil',
  },
  stats: {
    downloads: {
      monthly: 1619,
      weekly: 404,
    },
  },
})
