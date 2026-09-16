import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@binbinji/unplugin-compress-json',
  description: 'A plugin to compress json files',
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
    'transform',
    'json',
    'compress',
  ],
  source: {
    github: 'chouchouji/unplugin-compress-json',
    npm: '@binbinji/unplugin-compress-json',
  },
  links: {
    github: 'https://github.com/chouchouji/unplugin-compress-json',
    npm: 'https://www.npmjs.com/package/@binbinji/unplugin-compress-json',
    website: 'https://github.com/chouchouji/unplugin-compress-json#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 44,
      weekly: 1,
    },
  },
})
