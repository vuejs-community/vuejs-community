import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-contents',
  description: 'A Rollup plugin to import content as strings like CSS, LESS and Fonts',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'css',
    'less',
    'font',
    'import',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ernstc/rollup-plugin-import-contents',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-contents',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
