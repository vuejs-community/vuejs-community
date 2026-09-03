import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@toolbuilder/rollup-plugin-commands',
  description: 'Configurable Rollup plugin to run async functions in sequence. Includes shell function for convenience.',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'command',
    'shell',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/toolbuilder/rollup-plugin-commands',
    npm: 'https://www.npmjs.com/package/@toolbuilder/rollup-plugin-commands',
  },
  stats: {
    downloads: {
      monthly: 59,
      weekly: 17,
    },
  },
})
