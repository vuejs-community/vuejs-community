import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rochars/rollup-plugin-closure-compiler',
  description: 'Rollup plugin to use Google Closure Compiler.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'closure-compiler',
    'closure-compiler-js',
  ],
  source: {
    github: 'rikuayanokozy/rollup-plugin-closure-compiler',
    npm: '@rochars/rollup-plugin-closure-compiler',
  },
  links: {
    github: 'https://github.com/rikuayanokozy/rollup-plugin-closure-compiler',
    npm: 'https://www.npmjs.com/package/@rochars/rollup-plugin-closure-compiler',
    website: 'https://github.com/rikuayanokozy/rollup-plugin-closure-compiler#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 3,
    },
  },
})
