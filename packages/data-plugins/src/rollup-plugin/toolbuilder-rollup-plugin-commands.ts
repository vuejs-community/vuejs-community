import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@toolbuilder/rollup-plugin-commands',
  description: 'Configurable Rollup plugin to run async functions in sequence. Includes shell function for convenience.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'command',
    'shell',
  ],
  links: {
    github: 'https://github.com/toolbuilder/rollup-plugin-commands',
    npm: 'https://www.npmjs.com/package/@toolbuilder/rollup-plugin-commands',
    website: 'https://github.com/toolbuilder/rollup-plugin-commands#readme',
  },
  source: {
    github: 'toolbuilder/rollup-plugin-commands',
    npm: '@toolbuilder/rollup-plugin-commands',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 5,
    },
  },
})
