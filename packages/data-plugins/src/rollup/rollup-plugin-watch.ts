import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-watch',
  description: 'A rollup plugin to specify directories and files to watch',
  icon: 'logos:rollupjs',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'watch',
    'directories',
    'files',
    'assets',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jleeson/rollup-plugin-watch',
    npm: 'rollup-plugin-watch',
  },
  links: {
    github: 'https://github.com/jleeson/rollup-plugin-watch',
    npm: 'https://www.npmjs.com/package/rollup-plugin-watch',
  },
  stats: {
    downloads: {
      monthly: 3268,
      weekly: 1068,
    },
  },
})
