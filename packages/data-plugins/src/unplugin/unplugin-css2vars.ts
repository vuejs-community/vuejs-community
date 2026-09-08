import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-css2vars',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  version: '0.1.8',
  category: 'plugin',
  tags: [
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
    github: 'moliyu/unplugin-css2vars',
    npm: 'unplugin-css2vars',
  },
  links: {
    github: 'https://github.com/moliyu/unplugin-css2vars',
    npm: 'https://www.npmjs.com/package/unplugin-css2vars',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 5,
    },
  },
})
