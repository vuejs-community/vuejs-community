import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-sentry',
  description: 'Sentry plugin for webpack, vite, rollup, nuxt .etc.',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'kricsleo/unplugin-sentry',
    npm: 'unplugin-sentry',
  },
  links: {
    github: 'https://github.com/kricsleo/unplugin-sentry',
    npm: 'https://www.npmjs.com/package/unplugin-sentry',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 4,
    },
  },
})
