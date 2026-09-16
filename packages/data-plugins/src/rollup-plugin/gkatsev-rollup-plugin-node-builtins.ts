import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gkatsev/rollup-plugin-node-builtins',
  description: 'use node builtins in browser with rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'calvinmetcalf/rollup-plugin-node-builtins',
    npm: '@gkatsev/rollup-plugin-node-builtins',
  },
  links: {
    github: 'https://github.com/calvinmetcalf/rollup-plugin-node-builtins',
    npm: 'https://www.npmjs.com/package/@gkatsev/rollup-plugin-node-builtins',
    website: 'https://github.com/calvinmetcalf/rollup-plugin-node-builtins#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 126,
      weekly: 16,
    },
  },
})
