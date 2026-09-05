import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svg2solid',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.2',
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
    github: 'https://github.com/antfu/unplugin-svg2solid',
    npm: 'https://www.npmjs.com/package/unplugin-svg2solid',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
