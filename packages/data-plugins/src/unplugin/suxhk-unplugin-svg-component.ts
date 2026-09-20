import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@suxhk/unplugin-svg-component',
  description: 'generate a vue/react component through svg files, supporting svg file HMR and typescript intelligence prompt.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'svg',
    'svg-sprite',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/jevon617/unplugin-svg-component',
    npm: 'https://www.npmjs.com/package/@suxhk/unplugin-svg-component',
    website: 'https://github.com/jevon617/unplugin-svg-component#readme',
  },
  source: {
    github: 'jevon617/unplugin-svg-component',
    npm: '@suxhk/unplugin-svg-component',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 7,
    },
  },
})
