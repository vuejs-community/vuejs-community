import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yagni-js/rollup-plugin-yagni',
  description: 'Rollup plugin for html template to yagni-dom compatible js module compilation ',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'frontend',
    'functional',
    'yagni-js',
    'rollup-plugin',
  ],
  source: {
    github: 'yagni-js/rollup-plugin-yagni',
    npm: '@yagni-js/rollup-plugin-yagni',
  },
  links: {
    github: 'https://github.com/yagni-js/rollup-plugin-yagni',
    npm: 'https://www.npmjs.com/package/@yagni-js/rollup-plugin-yagni',
    website: 'https://github.com/yagni-js/rollup-plugin-yagni#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
