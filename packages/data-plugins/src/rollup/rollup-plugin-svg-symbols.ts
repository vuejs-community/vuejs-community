import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svg-symbols',
  description: 'Transform imported SVG files into reusable SVG symbols',
  version: '0.0.23',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'svg',
    'symbols',
    'sprite',
    'loader',
    'icons',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/njesenberger/rollup-plugin-svg-symbols',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svg-symbols',
  },
  stats: {
    downloads: {
      monthly: 108,
      weekly: 18,
    },
  },
})
