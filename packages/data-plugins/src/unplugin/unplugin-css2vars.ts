import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-css2vars',
  description: 'Register global imports on demand for Vite and Webpack',
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
  source: {
    github: 'moliyu/unplugin-css2vars',
    npm: 'unplugin-css2vars',
  },
  links: {
    github: 'https://github.com/moliyu/unplugin-css2vars',
    npm: 'https://www.npmjs.com/package/unplugin-css2vars',
    website: 'https://github.com/moliyu/unplugin-css2vars#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
