import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'netlify-files',
  description: 'Nuxt module to create new _headers, _redirects and netlify.toml files for Netlify or to use existing ones',
  category: 'nuxt',
  types: [
    'Deployment',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/netlify-files-module',
    npm: 'https://npmjs.com/package/@nuxtjs/netlify-files',
    website: 'https://github.com/nuxt-community/netlify-files-module',
  },
  source: {
    github: 'nuxt-community/netlify-files-module',
    npm: '@nuxtjs/netlify-files',
  },
  stats: {
    stars: 49,
    downloads: {
      monthly: 828,
      weekly: 236,
    },
  },
})
