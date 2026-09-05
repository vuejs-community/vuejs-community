import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'bundle-buddy',
  description: 'Don\'t fight your webpack bundle, become friends!',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Developmint/nuxt-bundle-buddy',
    npm: 'https://npmjs.com/package/nuxt-bundle-buddy',
    website: 'https://github.com/Developmint/nuxt-bundle-buddy',
  },
  source: {
    github: 'Developmint/nuxt-bundle-buddy',
    npm: 'nuxt-bundle-buddy',
  },
  stats: {
    stars: 38,
    downloads: {
      monthly: 52,
      weekly: 20,
    },
  },
})
