import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'nuxt-pinecone',
  description: 'Pinecone integration for Nuxt: realtime video, audio, and data with client composables and server utilities',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nuxtaid/nuxt-pinecone',
    npm: 'https://npmjs.com/package/nuxt-pinecone',
    website: 'https://github.com/nuxtaid/nuxt-pinecone#readme',
  },
  source: {
    github: 'nuxtaid/nuxt-pinecone',
    npm: 'nuxt-pinecone',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 115,
      weekly: 36,
    },
  },
})
