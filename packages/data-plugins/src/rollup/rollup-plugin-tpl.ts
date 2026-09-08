import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tpl',
  description: 'Import text files as tpls',
  icon: 'logos:rollupjs',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'template',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'differui/rollup-plugin-tpl',
    npm: 'rollup-plugin-tpl',
  },
  links: {
    github: 'https://github.com/differui/rollup-plugin-tpl',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tpl',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
