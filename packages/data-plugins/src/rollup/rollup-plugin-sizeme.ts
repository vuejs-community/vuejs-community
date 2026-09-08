import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sizeme',
  description: 'display brotli and gzip sizes for rollup assets.',
  icon: 'logos:rollupjs',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'brotli',
    'gzip',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'osdevisnot/rollup-plugin-sizeme',
    npm: 'rollup-plugin-sizeme',
  },
  links: {
    github: 'https://github.com/osdevisnot/rollup-plugin-sizeme',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sizeme',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 4,
    },
  },
})
