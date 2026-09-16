import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sgratzl/rollup-plugin-css-only',
  description: 'Rollup plugin that bundles imported css',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'css',
  ],
  source: {
    github: 'sgratzl/rollup-plugin-css-only',
    npm: '@sgratzl/rollup-plugin-css-only',
  },
  links: {
    github: 'https://github.com/sgratzl/rollup-plugin-css-only',
    npm: 'https://www.npmjs.com/package/@sgratzl/rollup-plugin-css-only',
    website: 'https://github.com/sgratzl/rollup-plugin-css-only',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
