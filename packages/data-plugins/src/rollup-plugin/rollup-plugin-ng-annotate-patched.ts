import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ng-annotate-patched',
  description: 'Rollup Plugin for angularjs - annotate dependency injection',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'angularjs',
    'annotate',
  ],
  links: {
    github: 'https://github.com/FulgaSer/rollup-plugin-ng-annotate2',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ng-annotate-patched',
    website: 'https://github.com/clouway/rollup-plugin-ng-annotate-patched',
  },
  source: {
    github: 'FulgaSer/rollup-plugin-ng-annotate2',
    npm: 'rollup-plugin-ng-annotate-patched',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
