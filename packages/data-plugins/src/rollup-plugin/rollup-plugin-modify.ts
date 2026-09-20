import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-modify',
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
  links: {
    github: 'https://github.com/porsager/rollup-plugin-modify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-modify',
    website: 'https://github.com/porsager/rollup-plugin-modify#readme',
  },
  source: {
    github: 'porsager/rollup-plugin-modify',
    npm: 'rollup-plugin-modify',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 37905,
      weekly: 5686,
    },
  },
})
