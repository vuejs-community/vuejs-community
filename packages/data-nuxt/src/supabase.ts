import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'supabase',
  description: 'First class integration with Supabase',
  icon: '',
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
    stars: 935,
    downloads: {
      monthly: 222199,
      weekly: 58480,
    },
  },
})
