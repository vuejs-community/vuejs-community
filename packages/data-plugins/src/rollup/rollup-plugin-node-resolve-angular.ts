import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-angular',
  description: 'Bundle third-party dependencies in node_modules. Adds es2015-in-es2015 support, for example to use with Angular 4+.',
  version: '2.0.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/oasisdigital/rollup-plugin-node-resolve-angular',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-angular',
  },
  stats: {
    downloads: {
      monthly: 87,
      weekly: 33,
    },
  },
})
