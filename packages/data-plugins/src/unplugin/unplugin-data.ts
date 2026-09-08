import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-data',
  description: 'A versatile plugin for compiling and transforming custom-configurable data files (e.g., *.data.js/ts/mjs/mts) into JavaScript object strings.',
  icon: 'icon:dark-unplugin',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'rolldown',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'lisonge/unplugin-data',
    npm: 'unplugin-data',
  },
  links: {
    github: 'https://github.com/lisonge/unplugin-data',
    npm: 'https://www.npmjs.com/package/unplugin-data',
  },
  stats: {
    downloads: {
      monthly: 177,
      weekly: 48,
    },
  },
})
