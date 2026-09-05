import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'hub',
  description: 'Add database, KV, blob storage, and cache to your Nuxt application. NuxtHub works on Vercel, Cloudflare, Netlify, and more.',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nuxt-hub/core',
    npm: 'https://npmjs.com/package/@nuxthub/core',
    website: 'https://hub.nuxt.com',
  },
  source: {
    github: 'nuxt-hub/core',
    npm: '@nuxthub/core',
  },
  stats: {
    stars: 1286,
    downloads: {
      monthly: 81593,
      weekly: 19454,
    },
  },
})
