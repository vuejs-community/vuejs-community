import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tiled',
  description: 'Tiled Map (TMX) importer plugin for rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'tiled',
    'map',
    'tmx',
  ],
  links: {
    github: 'https://github.com/konsumer/rollup-plugin-tiled',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tiled',
    website: 'https://github.com/konsumer/rollup-plugin-tiled#readme',
  },
  source: {
    github: 'konsumer/rollup-plugin-tiled',
    npm: 'rollup-plugin-tiled',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
