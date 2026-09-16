import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svgpack',
  description: 'A Rollup plugin for minifying and compressing all SVG files in a specified folder and combining them into an SVG symbol.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'svg',
    'sprite',
    'icons',
    'optimization',
    'bundler',
    'frontend',
    'performance',
  ],
  source: {
    npm: 'rollup-plugin-svgpack',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-svgpack',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
