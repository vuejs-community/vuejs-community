import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svg2icon',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'svg',
    'font',
    'icon',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/duowb/unplugin-svg2icon',
    npm: 'https://www.npmjs.com/package/unplugin-svg2icon',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
