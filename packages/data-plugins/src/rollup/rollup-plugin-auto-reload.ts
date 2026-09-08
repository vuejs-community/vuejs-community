import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-auto-reload',
  description: 'Rollup plugin to automatically reload pages and bundles when changes are made',
  icon: 'logos:rollupjs',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'livereload',
    'reload',
    'plugin',
    'rollup',
    'rollup-plugin',
    'watch',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'pmwmedia/rollup-plugin-auto-reload',
    npm: 'rollup-plugin-auto-reload',
  },
  links: {
    github: 'https://github.com/pmwmedia/rollup-plugin-auto-reload',
    npm: 'https://www.npmjs.com/package/rollup-plugin-auto-reload',
  },
  stats: {
    downloads: {
      monthly: 2676,
      weekly: 508,
    },
  },
})
