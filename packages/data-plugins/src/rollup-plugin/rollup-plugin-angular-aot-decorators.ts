import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-angular-aot-decorators',
  description: 'Remove TypeScript decorators when compiling Angular with Ahead-Of-Time compilation',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'angular',
    'rollup-plugin',
    'rollup',
    'aot',
    'decorators',
  ],
  links: {
    github: 'https://github.com/jarivo/rollup-plugin-angular-aot-decorators',
    npm: 'https://www.npmjs.com/package/rollup-plugin-angular-aot-decorators',
    website: 'https://github.com/jarivo/rollup-plugin-angular-aot-decorators#readme',
  },
  source: {
    github: 'jarivo/rollup-plugin-angular-aot-decorators',
    npm: 'rollup-plugin-angular-aot-decorators',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
