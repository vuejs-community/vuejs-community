import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-import-assets',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'import',
    'images',
    'dts',
  ],
  links: {
    github: 'https://github.com/dusionlike/unplugin-import-assets',
    npm: 'https://www.npmjs.com/package/unplugin-import-assets',
    website: 'https://github.com/dusionlike/unplugin-import-assets#readme',
  },
  source: {
    github: 'dusionlike/unplugin-import-assets',
    npm: 'unplugin-import-assets',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
