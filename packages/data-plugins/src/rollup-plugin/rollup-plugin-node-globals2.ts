import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-globals2',
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
    github: 'playcode/rollup-plugin-node-globals',
    npm: 'rollup-plugin-node-globals2',
  },
  links: {
    github: 'https://github.com/playcode/rollup-plugin-node-globals',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-globals2',
    website: 'https://github.com/playcode/rollup-plugin-node-globals#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
