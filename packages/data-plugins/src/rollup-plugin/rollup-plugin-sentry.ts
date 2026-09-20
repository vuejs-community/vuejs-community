import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sentry',
  description: 'Official vite plugin for Sentry',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'sentry',
    'sentry-cli',
    'rollup-plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xyl66/rollup-plugin-sentry',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sentry',
    website: 'https://github.com/xyl66/rollup-plugin-sentry',
  },
  source: {
    github: 'xyl66/rollup-plugin-sentry',
    npm: 'rollup-plugin-sentry',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 46,
      weekly: 5,
    },
  },
})
