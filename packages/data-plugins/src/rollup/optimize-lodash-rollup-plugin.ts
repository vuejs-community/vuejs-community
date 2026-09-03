import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@optimize-lodash/rollup-plugin',
  description: 'Rewrite lodash imports with Rollup for improved tree-shaking.',
  version: '6.0.0',
  category: 'plugin',
  tags: [
    'lodash',
    'rollup',
    'rollup-plugin',
    'vite-plugin',
    'rolldown',
    'optimize',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kyle-johnson/rollup-plugin-optimize-lodash-imports',
    npm: 'https://www.npmjs.com/package/@optimize-lodash/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 2640066,
      weekly: 816954,
    },
  },
})
