import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-file-import',
  description: 'Emit import files. Replace import to relative path.',
  icon: 'logos:rollupjs',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'emit',
    'file',
    'require',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'r0kan/rollup-plugin-file-import',
    npm: 'rollup-plugin-file-import',
  },
  links: {
    github: 'https://github.com/r0kan/rollup-plugin-file-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-file-import',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
