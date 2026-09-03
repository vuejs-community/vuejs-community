import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svgpack',
  description: 'A Rollup plugin for minifying and compressing all SVG files in a specified folder and combining them into an SVG symbol.',
  version: '1.0.0',
  category: 'plugin',
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
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svgpack',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 4,
    },
  },
})
