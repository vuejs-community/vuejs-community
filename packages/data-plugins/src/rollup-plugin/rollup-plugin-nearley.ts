import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-nearley',
  description: 'This is rollup/vite plugin for [nearley](https://github.com/kach/nearley).',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aln8/rollup-plugin-nearley',
    npm: 'https://www.npmjs.com/package/rollup-plugin-nearley',
    website: 'https://github.com/aln8/rollup-plugin-nearley#readme',
  },
  source: {
    github: 'aln8/rollup-plugin-nearley',
    npm: 'rollup-plugin-nearley',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 9,
      weekly: 4,
    },
  },
})
