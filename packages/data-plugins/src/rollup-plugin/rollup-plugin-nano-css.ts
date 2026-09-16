import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-nano-css',
  description: 'Enables support for Nano-CSS extraction when using Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'nano-css',
    'css',
    'css-in-js',
  ],
  source: {
    npm: 'rollup-plugin-nano-css',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-nano-css',
    website: 'https://bitbucket.org/TheBosZ/rollup-plugin-nano-css',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 5,
    },
  },
})
