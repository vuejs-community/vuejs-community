import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-angular-mgm',
  description: 'Angular2 template and styles inliner. Forked from rollup-plugin-angular',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'angular2',
    'template',
    'styles',
    'inliner',
    'rollup-plugin',
  ],
  source: {
    github: 'mgm87/rollup-plugin-angular',
    npm: 'rollup-plugin-angular-mgm',
  },
  links: {
    github: 'https://github.com/mgm87/rollup-plugin-angular',
    npm: 'https://www.npmjs.com/package/rollup-plugin-angular-mgm',
    website: 'https://github.com/mgm87/rollup-plugin-angular#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
