import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-livereload',
  description: 'Rollup plugin for LiveReload that watches the bundle and reloads the page on change',
  version: '2.0.5',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'livereload',
    'lr',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/thgh/rollup-plugin-livereload',
    npm: 'https://www.npmjs.com/package/rollup-plugin-livereload',
  },
  stats: {
    downloads: {
      monthly: 258650,
      weekly: 65946,
    },
  },
})
