import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@yagni-js/rollup-plugin-yagni',
  description: 'Rollup plugin for html template to yagni-dom compatible js module compilation ',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'frontend',
    'functional',
    'yagni-js',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/yagni-js/rollup-plugin-yagni',
    npm: 'https://www.npmjs.com/package/@yagni-js/rollup-plugin-yagni',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 7,
    },
  },
})
