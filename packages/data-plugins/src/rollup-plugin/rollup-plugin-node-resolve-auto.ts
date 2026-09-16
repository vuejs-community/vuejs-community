import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-auto',
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
    github: 'nolanlawson/rollup-plugin-node-resolve-auto',
    npm: 'rollup-plugin-node-resolve-auto',
  },
  links: {
    github: 'https://github.com/nolanlawson/rollup-plugin-node-resolve-auto',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-auto',
    website: 'https://github.com/nolanlawson/rollup-plugin-node-resolve-auto#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 42,
      weekly: 15,
    },
  },
})
