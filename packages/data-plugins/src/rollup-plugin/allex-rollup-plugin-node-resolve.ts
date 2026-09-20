import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@allex/rollup-plugin-node-resolve',
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
    github: 'https://github.com/fedorio/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/@allex/rollup-plugin-node-resolve',
    website: 'https://github.com/fedorio/rollup-plugin-node-resolve#readme',
  },
  source: {
    github: 'fedorio/rollup-plugin-node-resolve',
    npm: '@allex/rollup-plugin-node-resolve',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 1,
    },
  },
})
