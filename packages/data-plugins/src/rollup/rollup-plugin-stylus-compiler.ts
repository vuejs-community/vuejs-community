import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylus-compiler',
  description: 'A rollup plugin to compile stylus',
  icon: 'logos:rollupjs',
  version: '1.0.1',
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
    github: 'RJHwang/rollup-plugin-stylus-compiler',
    npm: 'rollup-plugin-stylus-compiler',
  },
  links: {
    github: 'https://github.com/RJHwang/rollup-plugin-stylus-compiler',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylus-compiler',
  },
  stats: {
    downloads: {
      monthly: 301,
      weekly: 33,
    },
  },
})
