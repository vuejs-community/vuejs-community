import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-starter',
  description: 'Register global imports on demand for Vite and Webpack',
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
  links: {
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/unplugin-starter',
  },
  stats: {
    downloads: {
      monthly: 425,
      weekly: 124,
    },
  },
})
