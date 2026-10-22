import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-auth-sanctum',
  description: 'Laravel Sanctum authentication',
  icon: 'icon:laravel',
  category: 'nuxt',
  types: [
    'Authentication',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/manchenkoff/nuxt-auth-sanctum',
    npm: 'https://npmjs.com/package/nuxt-auth-sanctum',
    website: 'https://sanctum.manchenkoff.me',
  },
  source: {
    github: 'manchenkoff/nuxt-auth-sanctum',
    npm: 'nuxt-auth-sanctum',
  },
})
