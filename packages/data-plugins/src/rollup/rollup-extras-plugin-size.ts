import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-size',
  description: 'Rollup plugin to report the size of generated artifacts (raw, minified, gzip).',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'size',
    'bundle-size',
    'gzip',
    'minify',
    'report',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-size',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
