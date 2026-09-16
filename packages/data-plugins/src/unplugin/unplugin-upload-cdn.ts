import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-upload-cdn',
  description: 'Plugin for uploading resource files to cdn,  Powered by on unplugin',
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
    'cdn',
    'upload',
    'cos',
    'oss',
  ],
  source: {
    github: 'zenotsai/unplugin-upload-cdn',
    npm: 'unplugin-upload-cdn',
  },
  links: {
    github: 'https://github.com/zenotsai/unplugin-upload-cdn',
    npm: 'https://www.npmjs.com/package/unplugin-upload-cdn',
    website: 'https://github.com/zenotsai/unplugin-upload-cdn',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
