import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-angular',
  description: 'Angular2 template and styles inliner',
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
  links: {
    github: 'https://github.com/cebor/rollup-plugin-angular',
    npm: 'https://www.npmjs.com/package/rollup-plugin-angular',
    website: 'https://github.com/cebor/rollup-plugin-angular#readme',
  },
  source: {
    github: 'cebor/rollup-plugin-angular',
    npm: 'rollup-plugin-angular',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 1480,
      weekly: 355,
    },
  },
})
