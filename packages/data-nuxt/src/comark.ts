import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'comark',
  description: 'Components in Markdown (Comark) parser with streaming support.',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/comarkdown/comark',
    npm: 'https://npmjs.com/package/@comark/nuxt',
    website: 'https://comark.dev/',
  },
  source: {
    github: 'comarkdown/comark#main/packages/comark-nuxt',
    npm: '@comark/nuxt',
  },
  stats: {
    stars: 1005,
    downloads: {
      monthly: 74126,
      weekly: 19495,
    },
  },
})
