import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gamedev-js/rollup-plugin-node-resolve',
  description: 'Bundle third-party dependencies in node_modules',
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
  source: {
    github: 'rollup/rollup-plugin-node-resolve',
    npm: '@gamedev-js/rollup-plugin-node-resolve',
  },
  links: {
    github: 'https://github.com/rollup/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/@gamedev-js/rollup-plugin-node-resolve',
    website: 'https://github.com/rollup/rollup-plugin-node-resolve#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
