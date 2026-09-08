import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-folder',
  description: 'A Rollup plugin to resolve modules using the folder name',
  icon: 'logos:rollupjs',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'folder',
    'import',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jleeson/rollup-plugin-import-folder',
    npm: 'rollup-plugin-import-folder',
  },
  links: {
    github: 'https://github.com/jleeson/rollup-plugin-import-folder',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-folder',
  },
  stats: {
    downloads: {
      monthly: 311,
      weekly: 48,
    },
  },
})
