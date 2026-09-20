import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-dsv',
  description: 'Convert .csv and .tsv files into JavaScript modules with d3-dsv',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-dsv',
    website: 'https://github.com/rollup/plugins/tree/master/packages/dsv#readme',
  },
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-dsv',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 79775,
      weekly: 16211,
    },
  },
})
