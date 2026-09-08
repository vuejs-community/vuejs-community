import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-pages',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  version: '0.1.0',
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
    github: 'linhuibin98/unplugin-pages',
    npm: 'unplugin-pages',
  },
  links: {
    github: 'https://github.com/linhuibin98/unplugin-pages',
    npm: 'https://www.npmjs.com/package/unplugin-pages',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
