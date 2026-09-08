import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-globals2',
  description: 'insert the same globals browserify does',
  icon: 'logos:rollupjs',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'playcode/rollup-plugin-node-globals',
    npm: 'rollup-plugin-node-globals2',
  },
  links: {
    github: 'https://github.com/playcode/rollup-plugin-node-globals',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-globals2',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 1,
    },
  },
})
