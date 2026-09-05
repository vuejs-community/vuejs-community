import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'html-minifier',
  description: 'Minify the html for each request served by nuxt server (nuxt start)',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/html-minifier-module',
    npm: 'https://npmjs.com/package/@nuxtjs/html-minifier',
    website: 'https://github.com/nuxt-community/html-minifier-module',
  },
  source: {
    github: 'nuxt-community/html-minifier-module',
    npm: '@nuxtjs/html-minifier',
  },
  stats: {
    stars: 41,
    downloads: {
      monthly: 532,
      weekly: 156,
    },
  },
})
