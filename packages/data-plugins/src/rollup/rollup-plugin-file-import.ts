import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-file-import',
  description: 'Emit import files. Replace import to relative path.',
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
  links: {
    github: 'https://github.com/r0kan/rollup-plugin-file-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-file-import',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 7,
    },
  },
})
