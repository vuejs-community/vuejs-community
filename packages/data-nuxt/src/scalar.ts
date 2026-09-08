import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'scalar',
  description: 'Render a beautiful API References based on a OpenAPI/Swagger file with Nuxt.',
  icon: 'icon:scalar',
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
    stars: 16078,
    downloads: {
      monthly: 20522,
      weekly: 5572,
    },
  },
})
