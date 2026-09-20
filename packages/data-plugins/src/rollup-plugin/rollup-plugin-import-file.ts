import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-file',
  description: 'A rollup plugin that allows you to import any file type in your project',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'files',
  ],
  links: {
    github: 'https://github.com/jlocoding/rollup-plugin-import-file',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-file',
    website: 'https://github.com/jlocoding/rollup-plugin-import-file#readme',
  },
  source: {
    github: 'jlocoding/rollup-plugin-import-file',
    npm: 'rollup-plugin-import-file',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 2583,
      weekly: 487,
    },
  },
})
