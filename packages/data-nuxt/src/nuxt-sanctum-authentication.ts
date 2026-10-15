import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-sanctum-authentication',
  description: 'Laravel Sanctum authentication with CSRF token management, cookie and token-based auth, and SSR support.',
  icon: 'icon:laravel',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/qirolab/nuxt-sanctum-authentication',
    npm: 'https://npmjs.com/package/@qirolab/nuxt-sanctum-authentication',
    website: 'https://qirolab.com',
  },
  source: {
    github: 'qirolab/nuxt-sanctum-authentication',
    npm: '@qirolab/nuxt-sanctum-authentication',
  },
})
