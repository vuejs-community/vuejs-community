import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-compress',
  description: 'A common compress plugin for Vite/Webpack/Rollup(etc...) powered by Unplugin',
  icon: 'icon:dark-unplugin',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'rogerleung0411/unplugin-compress',
    npm: 'unplugin-compress',
  },
  links: {
    github: 'https://github.com/rogerleung0411/unplugin-compress',
    npm: 'https://www.npmjs.com/package/unplugin-compress',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
