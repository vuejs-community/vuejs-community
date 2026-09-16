import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-livereload',
  description: 'Rollup plugin for LiveReload that watches the bundle and reloads the page on change',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'livereload',
    'lr',
  ],
  source: {
    github: 'thgh/rollup-plugin-livereload',
    npm: 'rollup-plugin-livereload',
  },
  links: {
    github: 'https://github.com/thgh/rollup-plugin-livereload',
    npm: 'https://www.npmjs.com/package/rollup-plugin-livereload',
    website: 'https://github.com/thgh/rollup-plugin-livereload',
  },
  stats: {
    stars: 161,
    downloads: {
      monthly: 250371,
      weekly: 58477,
    },
  },
})
