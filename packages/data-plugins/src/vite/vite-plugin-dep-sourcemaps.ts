import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dep-sourcemaps',
  description: 'Chain a bundle\'s sourcemaps through its dependencies\' sourcemaps so stack traces resolve to the original source instead of the bundled dist — works under Rolldown / Vite 8 where external dependency sourcemaps aren\'t chained yet.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'rolldown',
    'rollup',
    'sourcemap',
    'source-map',
    'sourcemaps',
    'remapping',
    'sentry',
    'stacktrace',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/javadtavakoli/vite-plugin-dep-sourcemaps',
    npm: 'https://www.npmjs.com/package/vite-plugin-dep-sourcemaps',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 0,
    },
  },
})
