import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-file',
  description: 'A rollup plugin that allows you to import any file type in your project',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'files',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jlocoding/rollup-plugin-import-file',
    npm: 'rollup-plugin-import-file',
  },
  links: {
    github: 'https://github.com/jlocoding/rollup-plugin-import-file',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-file',
  },
  stats: {
    downloads: {
      monthly: 2060,
      weekly: 764,
    },
  },
})
