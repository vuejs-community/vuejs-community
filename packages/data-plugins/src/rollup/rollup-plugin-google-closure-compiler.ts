import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-google-closure-compiler',
  description: 'Rollup plugin for invoking the Google Closure Compiler with Java.',
  icon: 'logos:rollupjs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'closure',
    'closure-compiler',
    'closure-compiler-js',
    'google-closure-compiler',
    'closure-rollup',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'rikuayanokozy/rollup-plugin-closure-compiler',
    npm: 'rollup-plugin-google-closure-compiler',
  },
  links: {
    github: 'https://github.com/rikuayanokozy/rollup-plugin-closure-compiler',
    npm: 'https://www.npmjs.com/package/rollup-plugin-google-closure-compiler',
  },
  stats: {
    downloads: {
      monthly: 48,
      weekly: 7,
    },
  },
})
