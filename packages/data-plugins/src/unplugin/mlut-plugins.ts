import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mlut/plugins',
  description: 'mlut plugins for Rollup, Vite and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'mlut',
    'atomic css',
    'functional css',
    'utility-first',
    'plugin',
    'unplugin',
    'rollup',
    'vite',
    'webpack',
  ],
  source: {
    github: 'mlutcss/mlut',
    npm: '@mlut/plugins',
  },
  links: {
    github: 'https://github.com/mlutcss/mlut',
    npm: 'https://www.npmjs.com/package/@mlut/plugins',
    website: 'https://mlut.style/',
  },
  stats: {
    stars: 285,
    downloads: {
      monthly: 32,
      weekly: 3,
    },
  },
})
