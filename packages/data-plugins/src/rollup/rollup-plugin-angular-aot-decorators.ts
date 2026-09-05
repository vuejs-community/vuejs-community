import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-angular-aot-decorators',
  description: 'Remove TypeScript decorators when compiling Angular with Ahead-Of-Time compilation',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'angular',
    'rollup-plugin',
    'rollup',
    'aot',
    'decorators',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/jarivo/rollup-plugin-angular-aot-decorators',
    npm: 'https://www.npmjs.com/package/rollup-plugin-angular-aot-decorators',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
