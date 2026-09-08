import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-closure-compiler-js',
  description: 'Rollup plugin to invoke google-closure-compiler-js.',
  icon: 'logos:rollupjs',
  version: '1.0.6',
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
  source: {
    github: 'camelaissani/rollup-plugin-closure-compiler-js',
    npm: 'rollup-plugin-closure-compiler-js',
  },
  links: {
    github: 'https://github.com/camelaissani/rollup-plugin-closure-compiler-js',
    npm: 'https://www.npmjs.com/package/rollup-plugin-closure-compiler-js',
  },
  stats: {
    downloads: {
      monthly: 4006,
      weekly: 783,
    },
  },
})
