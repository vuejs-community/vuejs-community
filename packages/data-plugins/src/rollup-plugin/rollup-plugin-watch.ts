import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-watch',
  description: 'A rollup plugin to specify directories and files to watch',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'watch',
    'directories',
    'files',
    'assets',
  ],
  source: {
    github: 'jleeson/rollup-plugin-watch',
    npm: 'rollup-plugin-watch',
  },
  links: {
    github: 'https://github.com/jleeson/rollup-plugin-watch',
    npm: 'https://www.npmjs.com/package/rollup-plugin-watch',
    website: 'https://github.com/jleeson/rollup-plugin-watch#readme',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 3916,
      weekly: 1075,
    },
  },
})
