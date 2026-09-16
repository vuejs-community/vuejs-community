import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-file-import',
  description: 'Emit import files. Replace import to relative path.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'emit',
    'file',
    'require',
  ],
  source: {
    github: 'r0kan/rollup-plugin-file-import',
    npm: 'rollup-plugin-file-import',
  },
  links: {
    github: 'https://github.com/r0kan/rollup-plugin-file-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-file-import',
    website: 'https://github.com/r0kan/rollup-plugin-file-import#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
