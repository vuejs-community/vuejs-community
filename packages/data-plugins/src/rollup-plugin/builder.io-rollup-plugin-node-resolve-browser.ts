import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@builder.io/rollup-plugin-node-resolve-browser',
  description: 'Rollup plugin node resolve for the browser, e.g. with a virtual file system',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  links: {
    github: 'https://github.com/rollup/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/@builder.io/rollup-plugin-node-resolve-browser',
    website: 'https://github.com/rollup/rollup-plugin-node-resolve#readme',
  },
  source: {
    github: 'rollup/rollup-plugin-node-resolve',
    npm: '@builder.io/rollup-plugin-node-resolve-browser',
  },
  stats: {
    stars: 469,
    downloads: {
      monthly: 24,
      weekly: 7,
    },
  },
})
