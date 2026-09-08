import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ng-annotate-patched',
  description: 'Rollup Plugin for angularjs - annotate dependency injection',
  icon: 'logos:rollupjs',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'angularjs',
    'annotate',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'FulgaSer/rollup-plugin-ng-annotate2',
    npm: 'rollup-plugin-ng-annotate-patched',
  },
  links: {
    github: 'https://github.com/FulgaSer/rollup-plugin-ng-annotate2',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ng-annotate-patched',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
