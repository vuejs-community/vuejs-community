import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tiled',
  description: 'Tiled Map (TMX) importer plugin for rollup',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'tiled',
    'map',
    'tmx',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/konsumer/rollup-plugin-tiled',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tiled',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
