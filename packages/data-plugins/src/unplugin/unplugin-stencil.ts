import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-stencil',
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
    npm: 'https://www.npmjs.com/package/unplugin-stencil',
    website: 'https://github.com/stencil-community/unplugin-stencil#readme',
  },
  source: {
    github: 'stencil-community/unplugin-stencil',
    npm: 'unplugin-stencil',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2062,
      weekly: 274,
    },
  },
})
