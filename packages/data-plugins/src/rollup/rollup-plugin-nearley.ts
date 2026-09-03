import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-nearley',
  description: 'This is rollup/vite plugin for [nearley](https://github.com/kach/nearley).',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/aln8/rollup-plugin-nearley',
    npm: 'https://www.npmjs.com/package/rollup-plugin-nearley',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 2,
    },
  },
})
