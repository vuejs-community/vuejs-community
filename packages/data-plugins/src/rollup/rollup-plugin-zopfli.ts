import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-zopfli',
  description: 'Compress your Rollup bundle with Gzip',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'gzip',
    'compress',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kryops/rollup-plugin-gzip',
    npm: 'https://www.npmjs.com/package/rollup-plugin-zopfli',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
