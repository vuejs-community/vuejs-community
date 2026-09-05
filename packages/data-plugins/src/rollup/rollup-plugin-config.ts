import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-config',
  description: 'Plugin for Rollup to replace variables with values from configuration object (great to use with node-config)',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'config',
    'node-config',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-config',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
