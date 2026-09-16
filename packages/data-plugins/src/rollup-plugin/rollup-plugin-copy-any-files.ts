import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-copy-any-files',
  description: 'Rollup copy any files.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'copy',
  ],
  source: {
    github: 'pingan8787/rollup-plugin-copy-files',
    npm: 'rollup-plugin-copy-any-files',
  },
  links: {
    github: 'https://github.com/pingan8787/rollup-plugin-copy-files',
    npm: 'https://www.npmjs.com/package/rollup-plugin-copy-any-files',
    website: 'https://github.com/pingan8787/rollup-plugin-copy-files#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 30,
      weekly: 4,
    },
  },
})
