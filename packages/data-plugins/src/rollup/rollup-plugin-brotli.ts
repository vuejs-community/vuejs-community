import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-brotli',
  description: 'Compress your Rollup bundle with Brotli',
  icon: 'logos:rollupjs',
  version: '3.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'brotli',
    'compress',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'keithamus/rollup-plugin-brotli',
    npm: 'rollup-plugin-brotli',
  },
  links: {
    github: 'https://github.com/keithamus/rollup-plugin-brotli',
    npm: 'https://www.npmjs.com/package/rollup-plugin-brotli',
  },
  stats: {
    downloads: {
      monthly: 257317,
      weekly: 61459,
    },
  },
})
