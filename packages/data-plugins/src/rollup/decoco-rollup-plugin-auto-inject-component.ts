import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@decoco/rollup-plugin-auto-inject-component',
  description: 'Auto inject import component code for decoco project.',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'decoco',
    'rollup-plugin',
    'decoco-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@decoco/rollup-plugin-auto-inject-component',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
