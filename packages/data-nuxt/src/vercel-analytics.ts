import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vercel-analytics',
  description: 'Privacy-friendly, real-time traffic insights for your Nuxt app',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vercel/analytics',
    npm: 'https://npmjs.com/package/@vercel/analytics',
    website: 'https://vercel.com/docs/analytics',
  },
  source: {
    github: 'vercel/analytics#main/packages/web',
    npm: '@vercel/analytics',
  },
  stats: {
    stars: 515,
    downloads: {
      monthly: 23864670,
      weekly: 6007596,
    },
  },
})
