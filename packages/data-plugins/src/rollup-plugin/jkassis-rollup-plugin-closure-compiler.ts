import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jkassis/rollup-plugin-closure-compiler',
  description: 'Rollup + Google Closure Compiler',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'ampproject/rollup-plugin-closure-compiler',
    npm: '@jkassis/rollup-plugin-closure-compiler',
  },
  links: {
    github: 'https://github.com/ampproject/rollup-plugin-closure-compiler',
    npm: 'https://www.npmjs.com/package/@jkassis/rollup-plugin-closure-compiler',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 41,
      weekly: 7,
    },
  },
})
