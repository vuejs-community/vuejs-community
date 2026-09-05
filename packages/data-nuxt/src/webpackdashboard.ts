import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'webpackdashboard',
  description: 'Webpack Dashboard module for Nuxt. A CLI dashboard for your webpack dev server.',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/paulgv/nuxt-webpackdashboard',
    npm: 'https://npmjs.com/package/nuxt-webpackdashboard',
    website: 'https://github.com/paulgv/nuxt-webpackdashboard',
  },
  source: {
    github: 'paulgv/nuxt-webpackdashboard',
    npm: 'nuxt-webpackdashboard',
  },
  stats: {
    stars: 24,
    downloads: {
      monthly: 111,
      weekly: 22,
    },
  },
})
