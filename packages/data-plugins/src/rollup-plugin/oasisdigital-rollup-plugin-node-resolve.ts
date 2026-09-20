import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oasisdigital/rollup-plugin-node-resolve',
  description: 'Bundle third-party dependencies in node_modules. Fork to add es2015-in-es2015 support.',
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
    npm: 'https://www.npmjs.com/package/@oasisdigital/rollup-plugin-node-resolve',
    website: 'https://github.com/rollup/rollup-plugin-node-resolve#readme',
  },
  source: {
    github: 'rollup/rollup-plugin-node-resolve',
    npm: '@oasisdigital/rollup-plugin-node-resolve',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
