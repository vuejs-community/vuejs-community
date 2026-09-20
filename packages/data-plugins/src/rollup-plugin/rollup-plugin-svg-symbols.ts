import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svg-symbols',
  description: 'Transform imported SVG files into reusable SVG symbols',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'svg',
    'symbols',
    'sprite',
    'loader',
    'icons',
  ],
  links: {
    github: 'https://github.com/njesenberger/rollup-plugin-svg-symbols',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svg-symbols',
    website: 'https://github.com/njesenberger/rollup-plugin-svg-symbols#readme',
  },
  source: {
    github: 'njesenberger/rollup-plugin-svg-symbols',
    npm: 'rollup-plugin-svg-symbols',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 103,
      weekly: 9,
    },
  },
})
