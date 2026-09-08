import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-angular',
  description: 'Angular2 template and styles inliner',
  icon: 'logos:rollupjs',
  version: '0.5.3',
  category: 'plugin',
  tags: [
    'angular2',
    'template',
    'styles',
    'inliner',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'cebor/rollup-plugin-angular',
    npm: 'rollup-plugin-angular',
  },
  links: {
    github: 'https://github.com/cebor/rollup-plugin-angular',
    npm: 'https://www.npmjs.com/package/rollup-plugin-angular',
  },
  stats: {
    downloads: {
      monthly: 1711,
      weekly: 268,
    },
  },
})
