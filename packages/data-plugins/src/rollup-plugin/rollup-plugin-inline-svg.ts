import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inline-svg',
  description: 'Support for inlining SVG files for Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'plugin',
    'svg',
    'inline',
  ],
  source: {
    github: 'sionzee/rollup-plugin-inline-svg',
    npm: 'rollup-plugin-inline-svg',
  },
  links: {
    github: 'https://github.com/sionzee/rollup-plugin-inline-svg',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inline-svg',
    website: 'https://github.com/sionzee/rollup-plugin-inline-svg#readme',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 3367,
      weekly: 450,
    },
  },
})
