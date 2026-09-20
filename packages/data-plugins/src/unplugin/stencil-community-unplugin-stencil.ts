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
  links: {
    github: 'https://github.com/stencil-community/unplugin-stencil',
    npm: 'https://www.npmjs.com/package/@stencil-community/unplugin-stencil',
    website: 'https://github.com/stencil-community/unplugin-stencil#readme',
  },
  source: {
    github: 'stencil-community/unplugin-stencil',
    npm: '@stencil-community/unplugin-stencil',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 1434,
      weekly: 191,
    },
  },
})
