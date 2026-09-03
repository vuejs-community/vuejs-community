import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-print-type',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.1.2',
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
    github: 'https://github.com/m0ksem/unplugin-print-type',
    npm: 'https://www.npmjs.com/package/unplugin-print-type',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
