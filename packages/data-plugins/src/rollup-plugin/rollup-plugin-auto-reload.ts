import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-auto-reload',
  description: 'Rollup plugin to automatically reload pages and bundles when changes are made',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'livereload',
    'reload',
    'plugin',
    'rollup',
    'rollup-plugin',
    'watch',
  ],
  links: {
    github: 'https://github.com/pmwmedia/rollup-plugin-auto-reload',
    npm: 'https://www.npmjs.com/package/rollup-plugin-auto-reload',
    website: 'https://github.com/pmwmedia/rollup-plugin-auto-reload',
  },
  source: {
    github: 'pmwmedia/rollup-plugin-auto-reload',
    npm: 'rollup-plugin-auto-reload',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 2765,
      weekly: 378,
    },
  },
})
