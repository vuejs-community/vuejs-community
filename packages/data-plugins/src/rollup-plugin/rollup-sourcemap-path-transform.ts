import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-sourcemap-path-transform',
  description: 'Function sourcemapPathTransform for Rollup to rebase sources in source maps, so that they start with the same path prefix.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'transform',
    'sourcemap',
    'path',
    'sourcemapPathTransform',
  ],
  source: {
    github: 'prantlf/rollup-sourcemap-path-transform',
    npm: 'rollup-sourcemap-path-transform',
  },
  links: {
    github: 'https://github.com/prantlf/rollup-sourcemap-path-transform',
    npm: 'https://www.npmjs.com/package/rollup-sourcemap-path-transform',
    website: 'http://github.com/prantlf/rollup-sourcemap-path-transform/',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 790,
      weekly: 125,
    },
  },
})
