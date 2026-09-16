import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tlvince-rollup-plugin-css-only',
  description: 'Rollup plugin that bundles imported css',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'css',
    'modules',
    'rollup-plugin-vue2',
  ],
  source: {
    github: 'thgh/rollup-plugin-css-only',
    npm: 'tlvince-rollup-plugin-css-only',
  },
  links: {
    github: 'https://github.com/thgh/rollup-plugin-css-only',
    npm: 'https://www.npmjs.com/package/tlvince-rollup-plugin-css-only',
    website: 'https://github.com/thgh/rollup-plugin-css-only',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
