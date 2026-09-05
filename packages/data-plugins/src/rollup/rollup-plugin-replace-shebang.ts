import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-replace-shebang',
  description: 'A Rollup plugin that preserves and relocates shebang to the output bundle.',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'shebang',
    'hashbang',
    'cli',
    'bundler',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/saqqdy/rollup-plugin-replace-shebang',
    npm: 'https://www.npmjs.com/package/rollup-plugin-replace-shebang',
  },
  stats: {
    downloads: {
      monthly: 5328,
      weekly: 1110,
    },
  },
})
