import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-var-to-this',
  description: 'When exporting a iife from your rollup script, the default is:',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'varToThis',
    'var-to-this',
  ],
  source: {
    github: 'andreasmcdermott/rollup-plugin-varToThis',
    npm: 'rollup-plugin-var-to-this',
  },
  links: {
    github: 'https://github.com/andreasmcdermott/rollup-plugin-varToThis',
    npm: 'https://www.npmjs.com/package/rollup-plugin-var-to-this',
    website: 'https://github.com/andreasmcdermott/rollup-plugin-varToThis#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
