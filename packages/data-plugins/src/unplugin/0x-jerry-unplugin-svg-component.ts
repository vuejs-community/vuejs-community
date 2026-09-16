import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@0x-jerry/unplugin-svg-component',
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
    npm: '@0x-jerry/unplugin-svg-component',
  },
  links: {
    github: 'https://github.com/jevon617/unplugin-svg-component',
    npm: 'https://www.npmjs.com/package/@0x-jerry/unplugin-svg-component',
    website: 'https://github.com/jevon617/unplugin-svg-component#readme',
  },
  stats: {
    stars: 75,
    downloads: {
      monthly: 38,
      weekly: 6,
    },
  },
})
