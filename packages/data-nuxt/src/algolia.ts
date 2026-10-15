import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'algolia',
  description: 'Algolia search integration',
  icon: 'icon:algolia',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/algolia',
    npm: 'https://npmjs.com/package/@nuxtjs/algolia',
    website: 'https://algolia.nuxtjs.org/',
  },
  source: {
    github: 'nuxt-modules/algolia',
    npm: '@nuxtjs/algolia',
  },
})
