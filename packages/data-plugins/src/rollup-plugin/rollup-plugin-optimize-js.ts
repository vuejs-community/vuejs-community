import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-optimize-js',
  description: 'Rollup plugin to easily run your bundles through optimize-js, post minifying',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'optimize-js',
    'performance',
  ],
  source: {
    github: 'ezekielchentnik/rollup-plugin-optimize-js',
    npm: 'rollup-plugin-optimize-js',
  },
  links: {
    github: 'https://github.com/ezekielchentnik/rollup-plugin-optimize-js',
    npm: 'https://www.npmjs.com/package/rollup-plugin-optimize-js',
    website: 'https://github.com/ezekielchentnik/rollup-plugin-optimize-js',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 617,
      weekly: 70,
    },
  },
})
