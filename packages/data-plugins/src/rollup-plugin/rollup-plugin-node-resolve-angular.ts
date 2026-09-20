import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-angular',
  description: 'Bundle third-party dependencies in node_modules. Adds es2015-in-es2015 support, for example to use with Angular 4+.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  links: {
    github: 'https://github.com/oasisdigital/rollup-plugin-node-resolve-angular',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-angular',
    website: 'https://github.com/OasisDigital/rollup-plugin-node-resolve-angular',
  },
  source: {
    github: 'oasisdigital/rollup-plugin-node-resolve-angular',
    npm: 'rollup-plugin-node-resolve-angular',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 80,
      weekly: 11,
    },
  },
})
