import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mnrendra/rollup-plugin-alias',
  description: 'A Rollup plugin to resolve alias paths and automatically read the alias configuration from tsconfig.json.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup-plugin-alias',
    'alias',
    'aliases',
  ],
  source: {
    github: 'mnrendra/rollup-plugin-alias',
    npm: '@mnrendra/rollup-plugin-alias',
  },
  links: {
    github: 'https://github.com/mnrendra/rollup-plugin-alias',
    npm: 'https://www.npmjs.com/package/@mnrendra/rollup-plugin-alias',
    website: 'https://github.com/mnrendra/rollup-plugin-alias#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 27,
      weekly: 6,
    },
  },
})
