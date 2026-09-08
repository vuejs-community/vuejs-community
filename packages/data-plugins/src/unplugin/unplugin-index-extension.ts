import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-index-extension',
  description: 'Auto import \'./package/index.vue\' by \'./package\', just like \'./package/index.js\'',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 's3xysteak/unplugin-index-extension',
    npm: 'unplugin-index-extension',
  },
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
