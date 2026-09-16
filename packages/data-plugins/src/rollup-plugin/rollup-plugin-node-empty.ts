import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-empty',
  description: 'use empty node builtins in browser with rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'keller-mark/rollup-plugin-node-empty',
    npm: 'rollup-plugin-node-empty',
  },
  links: {
    github: 'https://github.com/keller-mark/rollup-plugin-node-empty',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-empty',
    website: 'https://github.com/keller-mark/rollup-plugin-node-empty#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
