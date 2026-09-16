import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-external-assets',
  description: 'A rollup plugin to make assets external but include them in the output.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'assets',
    'import',
    'external',
  ],
  source: {
    github: 'recursive-beast/rollup-plugin-external-assets',
    npm: 'rollup-plugin-external-assets',
  },
  links: {
    github: 'https://github.com/recursive-beast/rollup-plugin-external-assets',
    npm: 'https://www.npmjs.com/package/rollup-plugin-external-assets',
    website: 'https://github.com/recursive-beast/rollup-plugin-external-assets#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 3472,
      weekly: 875,
    },
  },
})
