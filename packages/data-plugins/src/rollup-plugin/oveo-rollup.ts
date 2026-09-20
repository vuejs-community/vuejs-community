import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oveo/rollup',
  description: 'Rollup plugin for oveo optimizer',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'oveo',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/localvoid/oveo',
    npm: 'https://www.npmjs.com/package/@oveo/rollup',
    website: 'https://github.com/localvoid/oveo',
  },
  source: {
    github: 'localvoid/oveo',
    npm: '@oveo/rollup',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 1,
    },
  },
})
