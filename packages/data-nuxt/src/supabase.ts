import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'supabase',
  description: 'First class integration with Supabase',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/supabase',
    npm: 'https://npmjs.com/package/@nuxtjs/supabase',
    website: 'https://supabase.nuxtjs.org',
  },
  source: {
    github: 'nuxt-modules/supabase',
    npm: '@nuxtjs/supabase',
  },
  stats: {
    stars: 934,
    downloads: {
      monthly: 226165,
      weekly: 56614,
    },
  },
})
