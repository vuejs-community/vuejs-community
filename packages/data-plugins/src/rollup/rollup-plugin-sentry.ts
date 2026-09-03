import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sentry',
  description: 'Official vite plugin for Sentry',
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
  links: {
    github: 'https://github.com/xyl66/rollup-plugin-sentry',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sentry',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 15,
    },
  },
})
