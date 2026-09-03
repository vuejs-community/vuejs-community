import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-preset-vue',
  description: '[![NPM version](https://img.shields.io/npm/v/unplugin-preset-vue?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-preset-vue)',
  version: '0.1.1',
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
  links: {
    github: 'https://github.com/antfu/unplugin-preset-vue',
    npm: 'https://www.npmjs.com/package/unplugin-preset-vue',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
