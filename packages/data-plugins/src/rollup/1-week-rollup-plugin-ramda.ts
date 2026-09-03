import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@1-week/rollup-plugin-ramda',
  description: 'Rewrite Ramda imports with Rollup for improved tree-shaking.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'ramda',
    'rollup',
    'rollup-plugin',
    'vite-plugin',
    'optimize',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kyle-johnson/rollup-plugin-optimize-lodash-imports',
    npm: 'https://www.npmjs.com/package/@1-week/rollup-plugin-ramda',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
