import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@optimize-lodash/rollup-plugin',
  description: 'Rewrite lodash imports with Rollup for improved tree-shaking.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lodash',
    'rollup',
    'rollup-plugin',
    'vite-plugin',
    'rolldown',
    'optimize',
    'minify',
  ],
  links: {
    github: 'https://github.com/kyle-johnson/rollup-plugin-optimize-lodash-imports',
    npm: 'https://www.npmjs.com/package/@optimize-lodash/rollup-plugin',
    website: 'https://github.com/kyle-johnson/rollup-plugin-optimize-lodash-imports/tree/main/packages/rollup-plugin',
  },
  source: {
    github: 'kyle-johnson/rollup-plugin-optimize-lodash-imports',
    npm: '@optimize-lodash/rollup-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2820262,
      weekly: 600009,
    },
  },
})
