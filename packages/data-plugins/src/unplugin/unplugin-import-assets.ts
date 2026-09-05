import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-import-assets',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'import',
    'images',
    'dts',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/dusionlike/unplugin-import-assets',
    npm: 'https://www.npmjs.com/package/unplugin-import-assets',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
