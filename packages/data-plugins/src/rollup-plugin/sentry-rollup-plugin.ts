import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sentry/rollup-plugin',
  description: 'Official Sentry Rollup plugin',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'Sentry',
    'rollup-plugin',
    'Rollup',
    'bundler',
    'plugin',
  ],
  source: {
    github: 'getsentry/sentry-javascript-bundler-plugins',
    npm: '@sentry/rollup-plugin',
  },
  links: {
    github: 'https://github.com/getsentry/sentry-javascript-bundler-plugins',
    npm: 'https://www.npmjs.com/package/@sentry/rollup-plugin',
    website: 'https://github.com/getsentry/sentry-javascript-bundler-plugins/tree/main/packages/rollup-plugin',
  },
  stats: {
    stars: 177,
    downloads: {
      monthly: 8902880,
      weekly: 1770323,
    },
  },
})
