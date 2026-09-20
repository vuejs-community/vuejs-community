import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@crokita/rollup-plugin-node-globals',
  description: 'insert the same globals browserify does',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/calvinmetcalf/rollup-plugin-node-globals',
    npm: 'https://www.npmjs.com/package/@crokita/rollup-plugin-node-globals',
    website: 'https://github.com/calvinmetcalf/rollup-plugin-node-globals#readme',
  },
  source: {
    github: 'calvinmetcalf/rollup-plugin-node-globals',
    npm: '@crokita/rollup-plugin-node-globals',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 118,
      weekly: 43,
    },
  },
})
