import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-sentry',
  description: 'Sentry plugin for webpack, vite, rollup, nuxt .etc.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'kricsleo/unplugin-sentry',
    npm: 'unplugin-sentry',
  },
  links: {
    github: 'https://github.com/kricsleo/unplugin-sentry',
    npm: 'https://www.npmjs.com/package/unplugin-sentry',
    website: 'https://github.com/kricsleo/unplugin-sentry#readme',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
