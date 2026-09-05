import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'tailwindcss',
  description: 'Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.',
  category: 'nuxt',
  types: [
    'CSS',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/tailwindcss',
    npm: 'https://npmjs.com/package/@nuxtjs/tailwindcss',
    website: 'https://tailwindcss.nuxtjs.org',
  },
  source: {
    github: 'nuxt-modules/tailwindcss',
    npm: '@nuxtjs/tailwindcss',
  },
  stats: {
    stars: 1868,
    downloads: {
      monthly: 1477448,
      weekly: 386203,
    },
  },
})
