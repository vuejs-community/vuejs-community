import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-compress',
  description: 'A common compress plugin for Vite/Webpack/Rollup(etc...) powered by Unplugin',
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
  ],
  source: {
    github: 'rogerleung0411/unplugin-compress',
    npm: 'unplugin-compress',
  },
  links: {
    github: 'https://github.com/rogerleung0411/unplugin-compress',
    npm: 'https://www.npmjs.com/package/unplugin-compress',
    website: 'https://github.com/rogerleung0411/unplugin-compress#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
