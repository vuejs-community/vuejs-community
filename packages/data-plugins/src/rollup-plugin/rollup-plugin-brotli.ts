import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-brotli',
  description: 'Compress your Rollup bundle with Brotli',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'brotli',
    'compress',
  ],
  links: {
    github: 'https://github.com/keithamus/rollup-plugin-brotli',
    npm: 'https://www.npmjs.com/package/rollup-plugin-brotli',
    website: 'https://github.com/keithamus/rollup-plugin-brotli#readme',
  },
  source: {
    github: 'keithamus/rollup-plugin-brotli',
    npm: 'rollup-plugin-brotli',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 249935,
      weekly: 45290,
    },
  },
})
