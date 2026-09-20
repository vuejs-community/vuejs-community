import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-data',
  description: 'A versatile plugin for compiling and transforming custom-configurable data files (e.g., *.data.js/ts/mjs/mts) into JavaScript object strings.',
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
    'rolldown',
    'transform',
  ],
  links: {
    github: 'https://github.com/lisonge/unplugin-data',
    npm: 'https://www.npmjs.com/package/unplugin-data',
    website: 'https://github.com/lisonge/unplugin-data#readme',
  },
  source: {
    github: 'lisonge/unplugin-data',
    npm: 'unplugin-data',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 225,
      weekly: 78,
    },
  },
})
