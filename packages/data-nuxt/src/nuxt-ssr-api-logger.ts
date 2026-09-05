import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'nuxt-ssr-api-logger',
  description: 'A small module that helps you see when your Nuxt application sends any API request via SSR.',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/buglavecz/nuxt-ssr-api-logger',
    npm: 'https://npmjs.com/package/nuxt-ssr-api-logger',
    website: 'https://github.com/buglavecz/nuxt-ssr-api-logger',
  },
  source: {
    github: 'buglavecz/nuxt-ssr-api-logger',
    npm: 'nuxt-ssr-api-logger',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 2975,
      weekly: 1237,
    },
  },
})
