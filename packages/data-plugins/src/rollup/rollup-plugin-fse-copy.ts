import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fse-copy',
  description: 'Simple rollup plugin to copy static assets over to you public directory. Forker from https://github.com/meuter/rollup-plugin-copy',
  icon: 'logos:rollupjs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'copy',
    'plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'toxic-johann/rollup-plugin-fse-copy',
    npm: 'rollup-plugin-fse-copy',
  },
  links: {
    github: 'https://github.com/toxic-johann/rollup-plugin-fse-copy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fse-copy',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
