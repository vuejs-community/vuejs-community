import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'scalar',
  description: 'Render a beautiful API References based on a OpenAPI/Swagger file with Nuxt.',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/scalar/scalar',
    npm: 'https://npmjs.com/package/@scalar/nuxt',
    website: 'https://github.com/scalar/scalar/tree/main/integrations/nuxt',
  },
  source: {
    github: 'scalar/scalar#main/integrations/nuxt',
    npm: '@scalar/nuxt',
  },
  stats: {
    stars: 16047,
    downloads: {
      monthly: 21792,
      weekly: 4935,
    },
  },
})
