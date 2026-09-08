import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-zopfli',
  description: 'Compress your Rollup bundle with Gzip',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'kryops/rollup-plugin-gzip',
    npm: 'rollup-plugin-zopfli',
  },
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
