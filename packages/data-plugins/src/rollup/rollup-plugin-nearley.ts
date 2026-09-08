import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-nearley',
  description: 'This is rollup/vite plugin for [nearley](https://github.com/kach/nearley).',
  icon: 'logos:rollupjs',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'aln8/rollup-plugin-nearley',
    npm: 'rollup-plugin-nearley',
  },
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
