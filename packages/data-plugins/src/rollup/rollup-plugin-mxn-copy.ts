import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mxn-copy',
  description: 'Rollup plugin for copying assets into the output directory of your bundle',
  icon: 'logos:rollupjs',
  version: '0.5.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'bundle',
    'copy',
    'assets',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'ZimNovich/rollup-plugin-mxn-copy',
    npm: 'rollup-plugin-mxn-copy',
  },
  links: {
    github: 'https://github.com/ZimNovich/rollup-plugin-mxn-copy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-mxn-copy',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 12,
    },
  },
})
