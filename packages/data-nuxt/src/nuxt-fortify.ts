import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-fortify',
  description: 'Use Laravel fortify and sanctum with Nuxt',
  icon: 'icon:laravel-nuxt-fortify',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/dev-charles15531/nuxt-fortify',
    npm: 'https://npmjs.com/package/nuxt-fortify',
    website: 'https://github.com/dev-charles15531/nuxt-fortify',
  },
  source: {
    github: 'dev-charles15531/nuxt-fortify',
    npm: 'nuxt-fortify',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 120,
      weekly: 34,
    },
  },
})
