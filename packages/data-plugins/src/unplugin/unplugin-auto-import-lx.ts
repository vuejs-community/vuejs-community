import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-import-lx',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.11.2-dev.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'auto-import',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/antfu/unplugin-auto-import',
    npm: 'https://www.npmjs.com/package/unplugin-auto-import-lx',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
