import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-size',
  description: 'Rollup plugin to report the size of generated artifacts (raw, minified, gzip).',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'size',
    'bundle-size',
    'gzip',
    'minify',
    'report',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-size',
    website: 'https://github.com/kshutkin/rollup-extras/blob/main/plugin-size/README.md',
  },
  source: {
    github: 'kshutkin/rollup-extras',
    npm: '@rollup-extras/plugin-size',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
