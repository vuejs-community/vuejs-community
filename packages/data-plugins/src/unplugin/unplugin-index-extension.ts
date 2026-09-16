import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-index-extension',
  description: 'Auto import \'./package/index.vue\' by \'./package\', just like \'./package/index.js\'',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'plugin',
    'esm',
  ],
  source: {
    github: 's3xysteak/unplugin-index-extension',
    npm: 'unplugin-index-extension',
  },
  links: {
    github: 'https://github.com/s3xysteak/unplugin-index-extension',
    npm: 'https://www.npmjs.com/package/unplugin-index-extension',
    website: 'https://github.com/s3xysteak/unplugin-index-extension',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
