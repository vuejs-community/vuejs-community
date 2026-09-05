import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svg-store',
  description: 'Bundles all SVG icons from a directory into a single SVG file.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'svg',
    'icons',
    'sprite',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/meh/rollup-plugin-svg-store',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svg-store',
  },
  stats: {
    downloads: {
      monthly: 56,
      weekly: 9,
    },
  },
})
