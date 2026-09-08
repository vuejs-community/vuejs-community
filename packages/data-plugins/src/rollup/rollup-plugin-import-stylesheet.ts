import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-stylesheet',
  description: 'Rollup plugin for importing CSS sources as constructible stylesheets.',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'css',
    'import',
    'css-modules',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'prantlf/rollup-plugin-import-stylesheet',
    npm: 'rollup-plugin-import-stylesheet',
  },
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-import-stylesheet',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-stylesheet',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
