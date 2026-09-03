import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-index-extension',
  description: 'Auto import \'./package/index.vue\' by \'./package\', just like \'./package/index.js\'',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'plugin',
    'esm',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/s3xysteak/unplugin-index-extension',
    npm: 'https://www.npmjs.com/package/unplugin-index-extension',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
