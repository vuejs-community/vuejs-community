import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'twemoji',
  description: 'Twemoji module for Nuxt. Render emojis as SVG elements or PNG images.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/yizack/nuxt-twemoji',
    npm: 'https://npmjs.com/package/nuxt-twemoji',
    website: 'https://github.com/Yizack/nuxt-twemoji',
  },
  source: {
    github: 'yizack/nuxt-twemoji',
    npm: 'nuxt-twemoji',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 2013,
      weekly: 439,
    },
  },
})
