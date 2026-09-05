import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-closure-compiler',
  description: 'Rollup plugin to minify generated bundle with google-closure-compiler(Java).',
  version: '0.1.0',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-closure-compiler',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 8,
    },
  },
})
