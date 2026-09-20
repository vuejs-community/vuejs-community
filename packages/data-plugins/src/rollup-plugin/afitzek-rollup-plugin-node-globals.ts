import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@afitzek/rollup-plugin-node-globals',
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
    npm: 'https://www.npmjs.com/package/@afitzek/rollup-plugin-node-globals',
    website: 'https://github.com/calvinmetcalf/rollup-plugin-node-globals#readme',
  },
  source: {
    github: 'calvinmetcalf/rollup-plugin-node-globals',
    npm: '@afitzek/rollup-plugin-node-globals',
  },
  stats: {
    stars: 91,
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
