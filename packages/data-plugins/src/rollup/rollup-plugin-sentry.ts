import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sentry',
  description: 'Official vite plugin for Sentry',
  icon: 'logos:rollupjs',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'sentry',
    'sentry-cli',
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'xyl66/rollup-plugin-sentry',
    npm: 'rollup-plugin-sentry',
  },
  links: {
    github: 'https://github.com/xyl66/rollup-plugin-sentry',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sentry',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 7,
    },
  },
})
