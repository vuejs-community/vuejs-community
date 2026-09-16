import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-regexp',
  description: 'Modify rollup output with find / replace dynamically',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'replace',
    'find',
    'regex',
    'regexp',
    'modify',
    'codemod',
    'magic-string',
    'transform',
  ],
  source: {
    github: 'kingyue737/rollup-plugin-modify',
    npm: 'rollup-plugin-regexp',
  },
  links: {
    github: 'https://github.com/kingyue737/rollup-plugin-modify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-regexp',
    website: 'https://github.com/kingyue737/rollup-plugin-modify#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 553,
      weekly: 94,
    },
  },
})
