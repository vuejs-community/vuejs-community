import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'kinde',
  description: 'Kinde authentication integration for Nuxt',
  icon: 'icon:kinde',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/kinde',
    npm: 'https://npmjs.com/package/@nuxtjs/kinde',
    website: 'https://www.kinde.com/docs/developer-tools/nuxt-module/',
  },
  source: {
    github: 'nuxt-modules/kinde',
    npm: '@nuxtjs/kinde',
  },
  stats: {
    stars: 91,
    downloads: {
      monthly: 2844,
      weekly: 1023,
    },
  },
})
