import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-resolve-alias',
  description: 'Create aliases for Rollup to import module easily.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'alias',
    'aliases',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-resolve-alias',
    website: 'https://gitlab.com/gluons/rollup-plugin-resolve-alias',
  },
  source: {
    npm: 'rollup-plugin-resolve-alias',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 148,
      weekly: 27,
    },
  },
})
