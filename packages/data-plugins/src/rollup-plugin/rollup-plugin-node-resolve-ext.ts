import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-ext',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-ext',
    website: 'https://github.com/rollup/rollup-plugin-node-resolve#readme',
  },
  source: {
    github: 'rollup/rollup-plugin-node-resolve',
    npm: 'rollup-plugin-node-resolve-ext',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 5,
    },
  },
})
