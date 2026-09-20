import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@decoco/rollup-plugin-macros',
  description: 'TypeScript compile macros for decoco project.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'decoco',
    'rollup-plugin',
    'decoco-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@decoco/rollup-plugin-macros',
  },
  source: {
    npm: '@decoco/rollup-plugin-macros',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
