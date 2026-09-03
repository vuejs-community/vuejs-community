import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-sentry',
  description: 'Sentry plugin for webpack, vite, rollup, nuxt .etc.',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'plugin',
    'vite',
    'webpack',
    'rollup',
    'nuxt',
    'sentry',
    'sourcemap',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/kricsleo/unplugin-sentry',
    npm: 'https://www.npmjs.com/package/unplugin-sentry',
  },
  stats: {
    downloads: {
      monthly: 49,
      weekly: 2,
    },
  },
})
