import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'studio',
  description: 'A new experience to build content-driven website with Nuxt.',
  icon: 'icon:nuxt',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-content/nuxt-studio',
    npm: 'https://npmjs.com/package/nuxt-studio',
    website: 'https://nuxt.studio',
  },
  source: {
    github: 'nuxt-content/nuxt-studio',
    npm: 'nuxt-studio',
  },
  stats: {
    stars: 721,
    downloads: {
      monthly: 28428,
      weekly: 6807,
    },
  },
})
