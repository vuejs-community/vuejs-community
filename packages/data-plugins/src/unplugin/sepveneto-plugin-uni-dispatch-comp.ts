import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sepveneto/plugin-uni-dispatch-comp',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.1.1',
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
    npm: 'https://www.npmjs.com/package/@sepveneto/plugin-uni-dispatch-comp',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 7,
    },
  },
})
