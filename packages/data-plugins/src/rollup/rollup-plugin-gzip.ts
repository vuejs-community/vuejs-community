import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-gzip',
  description: 'Compress your Rollup / Vite bundle with Gzip or Brotli',
  icon: 'logos:rollupjs',
  version: '4.2.0',
  category: 'plugin',
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
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'kryops/rollup-plugin-gzip',
    npm: 'rollup-plugin-gzip',
  },
  links: {
    github: 'https://github.com/kryops/rollup-plugin-gzip',
    npm: 'https://www.npmjs.com/package/rollup-plugin-gzip',
  },
  stats: {
    downloads: {
      monthly: 734851,
      weekly: 192790,
    },
  },
})
