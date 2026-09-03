import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-squoosh',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.0',
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
    github: 'https://github.com/byronogis/unplugin-squoosh',
    npm: 'https://www.npmjs.com/package/unplugin-squoosh',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
