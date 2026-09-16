import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stencil-community/unplugin-stencil',
  description: 'An Unplugin that wraps Stencil compiler for Vite, Webpack, Rollup, and more',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'stencil-community/unplugin-stencil',
    npm: '@stencil-community/unplugin-stencil',
  },
  links: {
    github: 'https://github.com/stencil-community/unplugin-stencil',
    npm: 'https://www.npmjs.com/package/@stencil-community/unplugin-stencil',
    website: 'https://github.com/stencil-community/unplugin-stencil#readme',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 1434,
      weekly: 191,
    },
  },
})
