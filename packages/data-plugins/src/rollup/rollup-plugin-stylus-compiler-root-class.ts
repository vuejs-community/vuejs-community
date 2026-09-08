import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylus-compiler-root-class',
  description: 'A rollup plugin to compile stylus',
  icon: 'logos:rollupjs',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'stylus',
    'css',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'gstelmaczonek/rollup-plugin-stylus-compiler',
    npm: 'rollup-plugin-stylus-compiler-root-class',
  },
  links: {
    github: 'https://github.com/gstelmaczonek/rollup-plugin-stylus-compiler',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylus-compiler-root-class',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 6,
    },
  },
})
