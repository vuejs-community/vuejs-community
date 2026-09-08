import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ng-comp-fn',
  description: 'Vite Plugin for Angular Function components',
  icon: 'logos:vite-icon',
  version: '0.0.1-alpha.1',
  category: 'plugin',
  tags: [
    'vite',
    'vitest',
    'vite-plugin',
    'angular',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'crutchcorn/ng-comp-fn',
    npm: 'vite-plugin-ng-comp-fn',
  },
  links: {
    github: 'https://github.com/crutchcorn/ng-comp-fn',
    npm: 'https://www.npmjs.com/package/vite-plugin-ng-comp-fn',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
