import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'nuxt-sanctum-authentication',
  description: 'Nuxt 3 module for easy Laravel Sanctum authentication, offering CSRF token management, both cookie and token-based auth, and SSR compatibility.',
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
  stats: {
    stars: 46,
    downloads: {
      monthly: 2987,
      weekly: 706,
    },
  },
})
