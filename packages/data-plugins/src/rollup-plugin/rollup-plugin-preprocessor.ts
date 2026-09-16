import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-preprocessor',
  description: 'A Rollup plugin that adds a C-like preprocessor to Javascript.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'c',
    'preprocessor',
  ],
  source: {
    npm: 'rollup-plugin-preprocessor',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-preprocessor',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
