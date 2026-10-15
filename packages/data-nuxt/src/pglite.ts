import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pglite',
  description: 'Simplify the use of PGlite.',
  icon: 'icon:pglite',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/sandros94/nuxt-pglite',
    npm: 'https://npmjs.com/package/nuxt-pglite',
    website: 'https://nuxt-pglite.s94.dev',
  },
  source: {
    github: 'sandros94/nuxt-pglite',
    npm: 'nuxt-pglite',
  },
})
