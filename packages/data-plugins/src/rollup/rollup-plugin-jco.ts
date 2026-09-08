import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jco',
  description: 'Rollup plugin for generating bindings from WebAssembly System Interface (WASI) Components',
  icon: 'logos:rollupjs',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'components',
    'interface',
    'jco',
    'plugin',
    'rollup-plugin',
    'rollup',
    'system',
    'vite-plugin',
    'wasi',
    'webassembly',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'rioam2/rollup-plugin-jco',
    npm: 'rollup-plugin-jco',
  },
  links: {
    github: 'https://github.com/rioam2/rollup-plugin-jco',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jco',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 4,
    },
  },
})
