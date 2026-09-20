import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zrlps/rollup-plugin-resolve',
  description: 'Resolve plugin for rollupjs.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'resolve',
  ],
  links: {
    github: 'https://github.com/zrlps/rollup-plugin-resolve',
    npm: 'https://www.npmjs.com/package/@zrlps/rollup-plugin-resolve',
    website: 'https://github.com/zrlps/rollup-plugin-resolve#readme',
  },
  source: {
    github: 'zrlps/rollup-plugin-resolve',
    npm: '@zrlps/rollup-plugin-resolve',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 52,
      weekly: 4,
    },
  },
})
