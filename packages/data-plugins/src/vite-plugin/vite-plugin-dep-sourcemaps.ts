import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dep-sourcemaps',
  description: 'Chain a bundle\'s sourcemaps through its dependencies\' sourcemaps so stack traces resolve to the original source instead of the bundled dist — works under Rolldown / Vite 8 where external dependency sourcemaps aren\'t chained yet.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'javadtavakoli/vite-plugin-dep-sourcemaps',
    npm: 'vite-plugin-dep-sourcemaps',
  },
  links: {
    github: 'https://github.com/javadtavakoli/vite-plugin-dep-sourcemaps',
    npm: 'https://www.npmjs.com/package/vite-plugin-dep-sourcemaps',
    website: 'https://github.com/javadtavakoli/vite-plugin-dep-sourcemaps#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
