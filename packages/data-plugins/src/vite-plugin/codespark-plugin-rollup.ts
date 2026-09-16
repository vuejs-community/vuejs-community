import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@codespark/plugin-rollup',
  description: 'Rollup plugin for codespark ecosystem',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'codespark',
  ],
  source: {
    github: 'codesparkjs/codespark',
    npm: '@codespark/plugin-rollup',
  },
  links: {
    github: 'https://github.com/codesparkjs/codespark',
    npm: 'https://www.npmjs.com/package/@codespark/plugin-rollup',
    website: 'https://codesparkjs.com',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 29,
      weekly: 1,
    },
  },
})
