import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-empty',
  description: 'use empty node builtins in browser with rollup',
  icon: 'logos:rollupjs',
  version: '2.1.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'keller-mark/rollup-plugin-node-empty',
    npm: 'rollup-plugin-node-empty',
  },
  links: {
    github: 'https://github.com/keller-mark/rollup-plugin-node-empty',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-empty',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
