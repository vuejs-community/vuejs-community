import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@codespark/plugin-rollup',
  description: 'Rollup plugin for codespark ecosystem',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'codespark',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/codesparkjs/codespark',
    npm: 'https://www.npmjs.com/package/@codespark/plugin-rollup',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
