import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cjs-es',
  description: 'Convert CommonJS module into ES module',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'commonjs',
    'cjs',
    'es',
    'transform',
  ],
  links: {
    github: 'https://github.com/eight04/rollup-plugin-cjs-es',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cjs-es',
    website: 'https://github.com/eight04/rollup-plugin-cjs-es#readme',
  },
  source: {
    github: 'eight04/rollup-plugin-cjs-es',
    npm: 'rollup-plugin-cjs-es',
  },
  stats: {
    stars: 21,
    downloads: {
      monthly: 10171,
      weekly: 1475,
    },
  },
})
