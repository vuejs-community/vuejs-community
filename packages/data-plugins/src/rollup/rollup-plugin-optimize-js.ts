import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-optimize-js',
  description: 'Rollup plugin to easily run your bundles through optimize-js, post minifying',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'optimize-js',
    'performance',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ezekielchentnik/rollup-plugin-optimize-js',
    npm: 'https://www.npmjs.com/package/rollup-plugin-optimize-js',
  },
  stats: {
    downloads: {
      monthly: 535,
      weekly: 154,
    },
  },
})
