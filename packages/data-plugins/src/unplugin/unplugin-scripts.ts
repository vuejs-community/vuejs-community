import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-scripts',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.3',
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
  links: {
    github: 'https://github.com/antfu/unplugin-scripts',
    npm: 'https://www.npmjs.com/package/unplugin-scripts',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
