import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-polyfill-service',
  description: 'Rollup plugin that analyse built javascript files and generate a polyfill.io URL based on all features that are being used',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'polyfill',
    'polyfill.io',
    'es',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/touchifyapp/rollup-plugin-polyfill-service',
    npm: 'https://www.npmjs.com/package/rollup-plugin-polyfill-service',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
