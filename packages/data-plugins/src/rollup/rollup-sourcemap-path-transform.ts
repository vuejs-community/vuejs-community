import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-sourcemap-path-transform',
  description: 'Function sourcemapPathTransform for Rollup to rebase sources in source maps, so that they start with the same path prefix.',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'transform',
    'sourcemap',
    'path',
    'sourcemapPathTransform',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/prantlf/rollup-sourcemap-path-transform',
    npm: 'https://www.npmjs.com/package/rollup-sourcemap-path-transform',
  },
  stats: {
    downloads: {
      monthly: 776,
      weekly: 270,
    },
  },
})
