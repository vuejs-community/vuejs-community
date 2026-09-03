import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@suxhk/unplugin-svg-component',
  description: 'generate a vue/react component through svg files, supporting svg file HMR and typescript intelligence prompt.',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'svg',
    'svg-sprite',
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
    github: 'https://github.com/jevon617/unplugin-svg-component',
    npm: 'https://www.npmjs.com/package/@suxhk/unplugin-svg-component',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 7,
    },
  },
})
