import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svg-store',
  description: 'Bundles all SVG icons from a directory into a single SVG file.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'svg',
    'icons',
    'sprite',
  ],
  source: {
    github: 'meh/rollup-plugin-svg-store',
    npm: 'rollup-plugin-svg-store',
  },
  links: {
    github: 'https://github.com/meh/rollup-plugin-svg-store',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svg-store',
    website: 'https://github.com/meh/rollup-plugin-svg-store',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 37,
      weekly: 10,
    },
  },
})
