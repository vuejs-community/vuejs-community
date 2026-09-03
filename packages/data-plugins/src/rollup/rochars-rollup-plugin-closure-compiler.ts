import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rochars/rollup-plugin-closure-compiler',
  description: 'Rollup plugin to use Google Closure Compiler.',
  version: '0.2.1-alpha.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'closure-compiler',
    'closure-compiler-js',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rikuayanokozy/rollup-plugin-closure-compiler',
    npm: 'https://www.npmjs.com/package/@rochars/rollup-plugin-closure-compiler',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
