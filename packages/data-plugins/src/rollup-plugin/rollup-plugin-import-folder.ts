import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-folder',
  description: 'A Rollup plugin to resolve modules using the folder name',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'folder',
    'import',
  ],
  source: {
    github: 'jleeson/rollup-plugin-import-folder',
    npm: 'rollup-plugin-import-folder',
  },
  links: {
    github: 'https://github.com/jleeson/rollup-plugin-import-folder',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-folder',
    website: 'https://github.com/jleeson/rollup-plugin-import-folder#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 321,
      weekly: 55,
    },
  },
})
