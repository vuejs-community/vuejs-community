import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-angular-aot',
  description: 'Angular2 template and styles inliner for AOT',
  version: '0.0.4',
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
  links: {
    github: 'https://github.com/cankayacan/rollup-plugin-angular',
    npm: 'https://www.npmjs.com/package/rollup-plugin-angular-aot',
  },
  stats: {
    downloads: {
      monthly: 1109,
      weekly: 192,
    },
  },
})
