import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-code-deleter',
  description: 'A rollup plugin to delete code by Comments',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'code-deleter',
    'delete-code',
    'rollup-plugin-code-deleter',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Shunjun/rollup-plugin-code-deleter',
    npm: 'https://www.npmjs.com/package/rollup-plugin-code-deleter',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 10,
    },
  },
})
