import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-compress-image',
  description: 'A image compression plugin for Vite and Webpack that compresses your image assets using jsquash, tinpng, and SVGO, with support for custom compressors',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'vite-plugin',
    'webpack-plugin',
    'image compression',
    'image optimization',
    'svgo',
    'image',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pzehrel/unplugin-compress-image',
    npm: 'https://www.npmjs.com/package/unplugin-compress-image',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 5,
    },
  },
})
