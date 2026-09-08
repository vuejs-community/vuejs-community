import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svg-component',
  description: 'generate a vue/react component through svg files, supporting svg file HMR and typescript intelligence prompt.',
  icon: 'icon:dark-unplugin',
  version: '0.12.6',
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
  source: {
    github: 'jevon617/unplugin-svg-component',
    npm: 'unplugin-svg-component',
  },
  links: {
    github: 'https://github.com/jevon617/unplugin-svg-component',
    npm: 'https://www.npmjs.com/package/unplugin-svg-component',
  },
  stats: {
    downloads: {
      monthly: 3981,
      weekly: 658,
    },
  },
})
