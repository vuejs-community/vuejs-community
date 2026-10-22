import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'prisma',
  description: 'Integrate Prisma ORM to simplify database access!',
  icon: '',
  category: 'nuxt',
  types: [
    'Backend & Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/prisma/nuxt-prisma',
    npm: 'https://npmjs.com/package/@prisma/nuxt',
    website: 'https://www.prisma.io/docs/guides/frameworks/nuxt',
  },
  source: {
    github: 'prisma/nuxt-prisma',
    npm: '@prisma/nuxt',
  },
})
