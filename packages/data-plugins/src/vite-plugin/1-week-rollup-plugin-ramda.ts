import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@1-week/rollup-plugin-ramda',
  description: 'Rewrite Ramda imports with Rollup for improved tree-shaking.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ramda',
    'rollup',
    'rollup-plugin',
    'vite-plugin',
    'optimize',
    'minify',
  ],
  links: {
    github: 'https://github.com/kyle-johnson/rollup-plugin-optimize-lodash-imports',
    npm: 'https://www.npmjs.com/package/@1-week/rollup-plugin-ramda',
    website: 'https://github.com/kyle-johnson/rollup-plugin-optimize-lodash-imports/tree/main/packages/rollup-plugin',
  },
  source: {
    github: 'kyle-johnson/rollup-plugin-optimize-lodash-imports',
    npm: '@1-week/rollup-plugin-ramda',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 31,
      weekly: 6,
    },
  },
})
