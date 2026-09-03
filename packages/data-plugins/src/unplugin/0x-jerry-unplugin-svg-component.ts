import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@0x-jerry/unplugin-svg-component',
  description: 'generate a vue/react component through svg files, supporting svg file HMR and typescript intelligence prompt.',
  version: '0.5.1',
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
    npm: 'https://www.npmjs.com/package/@0x-jerry/unplugin-svg-component',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 7,
    },
  },
})
