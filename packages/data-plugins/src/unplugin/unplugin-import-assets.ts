import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-import-assets',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'dusionlike/unplugin-import-assets',
    npm: 'unplugin-import-assets',
  },
  links: {
    github: 'https://github.com/dusionlike/unplugin-import-assets',
    npm: 'https://www.npmjs.com/package/unplugin-import-assets',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
