import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-external-node-modules',
  description: 'Rollup plugin to use process.env',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'env',
    'front-end',
  ],
  source: {
    github: 'd8corp/rollup-plugin-external-node-modules',
    npm: 'rollup-plugin-external-node-modules',
  },
  links: {
    github: 'https://github.com/d8corp/rollup-plugin-external-node-modules',
    npm: 'https://www.npmjs.com/package/rollup-plugin-external-node-modules',
    website: 'https://github.com/d8corp/rollup-plugin-external-node-modules',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 282,
      weekly: 15,
    },
  },
})
