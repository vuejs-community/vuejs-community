import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-config',
  description: 'Plugin for Rollup to replace variables with values from configuration object (great to use with node-config)',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'config',
    'node-config',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-config',
  },
  source: {
    npm: 'rollup-plugin-config',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
