import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@revam/rollup-plugin-common',
  description: 'Revam\'s common tasks for rollup in a single plugin',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'plugin',
    'typescript',
  ],
  links: {
    github: 'https://github.com/revam/rollup-plugin-common',
    npm: 'https://www.npmjs.com/package/@revam/rollup-plugin-common',
    website: 'https://github.com/revam/rollup-plugin-common/tree/master#readme',
  },
  source: {
    github: 'revam/rollup-plugin-common',
    npm: '@revam/rollup-plugin-common',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
