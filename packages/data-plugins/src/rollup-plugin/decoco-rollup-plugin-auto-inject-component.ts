import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@decoco/rollup-plugin-auto-inject-component',
  description: 'Auto inject import component code for decoco project.',
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
    npm: 'https://www.npmjs.com/package/@decoco/rollup-plugin-auto-inject-component',
  },
  source: {
    npm: '@decoco/rollup-plugin-auto-inject-component',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
