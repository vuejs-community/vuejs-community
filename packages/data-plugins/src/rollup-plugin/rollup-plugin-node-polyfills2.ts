import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-polyfills2',
  description: 'fork from rollup-plugin-node-polyfills ===',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'ionic-team/rollup-plugin-node-polyfills',
    npm: 'rollup-plugin-node-polyfills2',
  },
  links: {
    github: 'https://github.com/ionic-team/rollup-plugin-node-polyfills',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-polyfills2',
    website: 'https://github.com/ionic-team/rollup-plugin-node-polyfills#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
