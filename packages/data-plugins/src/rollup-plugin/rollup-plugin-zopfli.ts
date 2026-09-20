import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-zopfli',
  description: 'Compress your Rollup bundle with Gzip',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'gzip',
    'compress',
  ],
  links: {
    github: 'https://github.com/kryops/rollup-plugin-gzip',
    npm: 'https://www.npmjs.com/package/rollup-plugin-zopfli',
    website: 'https://github.com/kryops/rollup-plugin-gzip#readme',
  },
  source: {
    github: 'kryops/rollup-plugin-gzip',
    npm: 'rollup-plugin-zopfli',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
