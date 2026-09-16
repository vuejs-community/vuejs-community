import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dangojs/unplugin-version-info',
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
    'rollup',
    'transform',
  ],
  source: {
    npm: '@dangojs/unplugin-version-info',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@dangojs/unplugin-version-info',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 6,
    },
  },
})
