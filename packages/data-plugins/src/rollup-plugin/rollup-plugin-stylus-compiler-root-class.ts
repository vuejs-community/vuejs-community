import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylus-compiler-root-class',
  description: 'A rollup plugin to compile stylus',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'stylus',
    'css',
  ],
  source: {
    github: 'gstelmaczonek/rollup-plugin-stylus-compiler',
    npm: 'rollup-plugin-stylus-compiler-root-class',
  },
  links: {
    github: 'https://github.com/gstelmaczonek/rollup-plugin-stylus-compiler',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylus-compiler-root-class',
    website: 'https://github.com/gstelmaczonek/rollup-plugin-stylus-compiler',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 38,
      weekly: 10,
    },
  },
})
