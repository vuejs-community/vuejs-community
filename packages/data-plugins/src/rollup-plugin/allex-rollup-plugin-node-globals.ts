import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@allex/rollup-plugin-node-globals',
  description: 'insert the same globals browserify does',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'calvinmetcalf/rollup-plugin-node-globals',
    npm: '@allex/rollup-plugin-node-globals',
  },
  links: {
    github: 'https://github.com/calvinmetcalf/rollup-plugin-node-globals',
    npm: 'https://www.npmjs.com/package/@allex/rollup-plugin-node-globals',
    website: 'https://github.com/calvinmetcalf/rollup-plugin-node-globals#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 11,
    },
  },
})
