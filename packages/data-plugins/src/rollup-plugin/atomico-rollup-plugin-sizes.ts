import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@atomico/rollup-plugin-sizes',
  description: 'This small utility allows you to monitor the size of the bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'gzip',
    'brotli',
  ],
  links: {
    github: 'https://github.com/atomicojs/rollup-plugin-sizes',
    npm: 'https://www.npmjs.com/package/@atomico/rollup-plugin-sizes',
    website: 'https://github.com/atomicojs/rollup-plugin-sizes#readme',
  },
  source: {
    github: 'atomicojs/rollup-plugin-sizes',
    npm: '@atomico/rollup-plugin-sizes',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 20378,
      weekly: 3479,
    },
  },
})
