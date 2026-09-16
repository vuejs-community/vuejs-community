import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svg-component',
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
  source: {
    github: 'jevon617/unplugin-svg-component',
    npm: 'unplugin-svg-component',
  },
  links: {
    github: 'https://github.com/jevon617/unplugin-svg-component',
    npm: 'https://www.npmjs.com/package/unplugin-svg-component',
    website: 'https://github.com/jevon617/unplugin-svg-component#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 4283,
      weekly: 1091,
    },
  },
})
