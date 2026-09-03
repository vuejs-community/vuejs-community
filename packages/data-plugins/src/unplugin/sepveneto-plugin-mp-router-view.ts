import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sepveneto/plugin-mp-router-view',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.5.0',
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
    github: 'https://github.com/SepVeneto/mp-plugin',
    npm: 'https://www.npmjs.com/package/@sepveneto/plugin-mp-router-view',
  },
  stats: {
    downloads: {
      monthly: 55,
      weekly: 3,
    },
  },
})
