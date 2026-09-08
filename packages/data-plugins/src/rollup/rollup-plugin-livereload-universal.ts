import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-livereload-universal',
  description: 'Rollup plugin for reloading user\'s page on manually emitted events.',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'dev-server',
    'live',
    'reload',
    'livereload',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mrnateriver/rollup-plugin-livereload-universal',
    npm: 'rollup-plugin-livereload-universal',
  },
  links: {
    github: 'https://github.com/mrnateriver/rollup-plugin-livereload-universal',
    npm: 'https://www.npmjs.com/package/rollup-plugin-livereload-universal',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 8,
    },
  },
})
