import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@leeyeh/rollup-plugin-node-resolve',
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
  links: {
    github: 'https://github.com/rollup/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/@leeyeh/rollup-plugin-node-resolve',
    website: 'https://github.com/rollup/rollup-plugin-node-resolve#readme',
  },
  source: {
    github: 'rollup/rollup-plugin-node-resolve',
    npm: '@leeyeh/rollup-plugin-node-resolve',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 98,
      weekly: 26,
    },
  },
})
