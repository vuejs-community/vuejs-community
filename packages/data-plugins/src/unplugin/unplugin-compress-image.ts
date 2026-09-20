import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-compress-image',
  description: 'A image compression plugin for Vite and Webpack that compresses your image assets using jsquash, tinpng, and SVGO, with support for custom compressors',
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
    'vite-plugin',
    'webpack-plugin',
    'image compression',
    'image optimization',
    'svgo',
    'image',
  ],
  links: {
    github: 'https://github.com/pzehrel/unplugin-compress-image',
    npm: 'https://www.npmjs.com/package/unplugin-compress-image',
    website: 'https://github.com/pzehrel/unplugin-compress-image#readme',
  },
  source: {
    github: 'pzehrel/unplugin-compress-image',
    npm: 'unplugin-compress-image',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 1,
    },
  },
})
