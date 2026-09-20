import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-internal-exports',
  description: 'A rollup plugin for excluding specific exports in the final bundle when using format iife',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'util',
    'plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-internal-exports',
    website: 'https://gitlab.com/ltngames/rollup-plugin-internal-exports#README',
  },
  source: {
    npm: 'rollup-plugin-internal-exports',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
