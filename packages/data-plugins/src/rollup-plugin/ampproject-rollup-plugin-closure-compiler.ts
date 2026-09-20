import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ampproject/rollup-plugin-closure-compiler',
  description: 'Rollup + Google Closure Compiler',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ampproject/rollup-plugin-closure-compiler',
    npm: 'https://www.npmjs.com/package/@ampproject/rollup-plugin-closure-compiler',
  },
  source: {
    github: 'ampproject/rollup-plugin-closure-compiler',
    npm: '@ampproject/rollup-plugin-closure-compiler',
  },
  stats: {
    stars: 293,
    downloads: {
      monthly: 26460,
      weekly: 5013,
    },
  },
})
