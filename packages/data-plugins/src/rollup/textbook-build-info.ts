import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@textbook/build-info',
  description: 'Generate build information for tracking deployments',
  version: '1.4.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/textbook/build-info',
    npm: 'https://www.npmjs.com/package/@textbook/build-info',
  },
  stats: {
    downloads: {
      monthly: 740,
      weekly: 203,
    },
  },
})
