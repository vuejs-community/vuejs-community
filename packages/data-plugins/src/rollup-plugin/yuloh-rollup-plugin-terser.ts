import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yuloh/rollup-plugin-terser',
  description: 'A simple plugin for using Terser with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'terser',
    'minify',
  ],
  links: {
    github: 'https://github.com/matt-allan/rollup-plugin-terser',
    npm: 'https://www.npmjs.com/package/@yuloh/rollup-plugin-terser',
    website: 'https://github.com/matt-allan/rollup-plugin-terser',
  },
  source: {
    github: 'matt-allan/rollup-plugin-terser',
    npm: '@yuloh/rollup-plugin-terser',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
