import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-gzip',
  description: 'Compress your Rollup / Vite bundle with Gzip or Brotli',
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
    'compression',
    'brotli',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kryops/rollup-plugin-gzip',
    npm: 'https://www.npmjs.com/package/rollup-plugin-gzip',
    website: 'https://github.com/kryops/rollup-plugin-gzip#readme',
  },
  source: {
    github: 'kryops/rollup-plugin-gzip',
    npm: 'rollup-plugin-gzip',
  },
  stats: {
    stars: 59,
    downloads: {
      monthly: 705494,
      weekly: 132623,
    },
  },
})
