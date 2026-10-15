import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'meilisearch',
  description: 'Meilisearch Instant Search integration',
  icon: 'icon:meilisearch',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/xlanex6/nuxt-meilisearch',
    npm: 'https://npmjs.com/package/nuxt-meilisearch',
    website: 'https://nuxt-meilisearch.vercel.app',
  },
  source: {
    github: 'xlanex6/nuxt-meilisearch',
    npm: 'nuxt-meilisearch',
  },
})
