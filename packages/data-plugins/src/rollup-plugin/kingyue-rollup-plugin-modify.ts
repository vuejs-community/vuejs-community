import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kingyue/rollup-plugin-modify',
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
    npm: '@kingyue/rollup-plugin-modify',
  },
  links: {
    github: 'https://github.com/kingyue737/rollup-plugin-modify',
    npm: 'https://www.npmjs.com/package/@kingyue/rollup-plugin-modify',
    website: 'https://github.com/kingyue737/rollup-plugin-modify#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 486,
      weekly: 54,
    },
  },
})
