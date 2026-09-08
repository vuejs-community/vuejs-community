import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-angular-ivy',
  description: 'Angular9 styles inliner',
  icon: 'logos:rollupjs',
  version: '0.6.1',
  category: 'plugin',
  tags: [
    'angular9',
    'ivy',
    'styles',
    'inliner',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'cebor/rollup-plugin-angular-ivy',
    npm: 'rollup-plugin-angular-ivy',
  },
  links: {
    github: 'https://github.com/cebor/rollup-plugin-angular-ivy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-angular-ivy',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
