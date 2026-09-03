import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sass-bundle',
  description: 'A simple rollup plugin for transpile sass and bundle and output a single file',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'sass',
    'rollup-plugin',
    'css',
    'scss',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/vrtexe/rollup-plugin-sass-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sass-bundle',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
