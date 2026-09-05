import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-var-to-this',
  description: 'When exporting a iife from your rollup script, the default is:',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'varToThis',
    'var-to-this',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/andreasmcdermott/rollup-plugin-varToThis',
    npm: 'https://www.npmjs.com/package/rollup-plugin-var-to-this',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
