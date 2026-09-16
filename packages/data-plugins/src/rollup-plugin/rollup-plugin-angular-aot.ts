import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-angular-aot',
  description: 'Angular2 template and styles inliner for AOT',
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
    github: 'cankayacan/rollup-plugin-angular',
    npm: 'rollup-plugin-angular-aot',
  },
  links: {
    github: 'https://github.com/cankayacan/rollup-plugin-angular',
    npm: 'https://www.npmjs.com/package/rollup-plugin-angular-aot',
    website: 'https://github.com/cankayacan/rollup-plugin-angular#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 975,
      weekly: 179,
    },
  },
})
