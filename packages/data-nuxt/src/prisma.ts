import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'prisma',
  description: 'Integrate Nuxt with Prisma ORM to simplify database access!',
  category: 'nuxt',
  types: [
    'Database',
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
  stats: {
    stars: 91,
    downloads: {
      monthly: 4964,
      weekly: 868,
    },
  },
})
