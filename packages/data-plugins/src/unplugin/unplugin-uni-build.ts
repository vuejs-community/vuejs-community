import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-uni-build',
  description: '[![NPM version](https://img.shields.io/npm/v/unplugin-uni-build?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-uni-build)',
  icon: 'icon:dark-unplugin',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'flippedround/unplugin-uni-build',
    npm: 'unplugin-uni-build',
  },
  links: {
    github: 'https://github.com/flippedround/unplugin-uni-build',
    npm: 'https://www.npmjs.com/package/unplugin-uni-build',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
