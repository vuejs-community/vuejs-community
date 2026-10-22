import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-openapi-wrapper',
  description: 'Generates typed $fetch and useFetch clients from OpenAPI documents, for both the app and Nitro.',
  icon: 'icon:openapi-wrapper',
  category: 'nuxt',
  types: [
    'API & Data Fetching',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Pentadome/nuxt-openAPI-wrapper',
    npm: 'https://npmjs.com/package/nuxt-openapi-wrapper',
    website: 'https://github.com/Pentadome/nuxt-openAPI-wrapper',
  },
  source: {
    github: 'Pentadome/nuxt-openAPI-wrapper',
    npm: 'nuxt-openapi-wrapper',
  },
})
