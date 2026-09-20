import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sizeme',
  description: 'display brotli and gzip sizes for rollup assets.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'brotli',
    'gzip',
  ],
  links: {
    github: 'https://github.com/osdevisnot/rollup-plugin-sizeme',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sizeme',
    website: 'https://github.com/osdevisnot/rollup-plugin-sizeme#readme',
  },
  source: {
    github: 'osdevisnot/rollup-plugin-sizeme',
    npm: 'rollup-plugin-sizeme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
