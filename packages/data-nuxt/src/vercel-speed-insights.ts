import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vercel-speed-insights',
  description: 'Real user performance metrics and suggestions for your Nuxt app',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vercel/speed-insights',
    npm: 'https://npmjs.com/package/@vercel/speed-insights',
    website: 'https://vercel.com/docs/speed-insights',
  },
  source: {
    github: 'vercel/speed-insights#main/packages/web',
    npm: '@vercel/speed-insights',
  },
  stats: {
    stars: 114,
    downloads: {
      monthly: 15460454,
      weekly: 3955368,
    },
  },
})
