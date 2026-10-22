import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'scalar',
  description: 'Render beautiful API references based on an OpenAPI/Swagger file.',
  icon: 'icon:scalar',
  category: 'nuxt',
  types: [
    'API & Data Fetching',
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
    github: 'scalar/scalar',
    npm: '@scalar/nuxt',
  },
})
