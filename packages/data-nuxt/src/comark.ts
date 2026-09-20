import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'comark',
  description: 'Components in Markdown (Comark) parser with streaming support.',
  icon: 'icon:comark',
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
    github: 'comarkdown/comark',
    npm: '@comark/nuxt',
  },
})
