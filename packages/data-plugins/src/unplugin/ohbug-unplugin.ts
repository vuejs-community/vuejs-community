import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ohbug/unplugin',
  description: 'Unplugin for upload your sourceMap files to Ohbug',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'ohbug',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/ohbug-org/unplugin-ohbug',
    npm: 'https://www.npmjs.com/package/@ohbug/unplugin',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 6,
    },
  },
})
