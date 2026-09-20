import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ng-comp-fn',
  description: 'Vite Plugin for Angular Function components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vitest',
    'vite-plugin',
    'angular',
  ],
  links: {
    github: 'https://github.com/crutchcorn/ng-comp-fn',
    npm: 'https://www.npmjs.com/package/vite-plugin-ng-comp-fn',
    website: 'https://github.com/crutchcorn/ng-comp-fn#readme',
  },
  source: {
    github: 'crutchcorn/ng-comp-fn',
    npm: 'vite-plugin-ng-comp-fn',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
