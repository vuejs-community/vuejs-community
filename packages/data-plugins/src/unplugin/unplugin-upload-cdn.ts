import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-upload-cdn',
  description: 'Plugin for uploading resource files to cdn,  Powered by on unplugin',
  icon: 'icon:dark-unplugin',
  version: '0.1.0',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  source: {
    github: 'zenotsai/unplugin-upload-cdn',
    npm: 'unplugin-upload-cdn',
  },
  links: {
    github: 'https://github.com/zenotsai/unplugin-upload-cdn',
    npm: 'https://www.npmjs.com/package/unplugin-upload-cdn',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
