import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'content-island',
  description: 'Content Island - A headless CMS that’s refreshingly simple',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/content-island/nuxt-content-island',
    npm: 'https://npmjs.com/package/@content-island/nuxt',
    website: 'https://contentisland.net/',
  },
  source: {
    github: 'content-island/nuxt-content-island',
    npm: '@content-island/nuxt',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 91,
      weekly: 17,
    },
  },
})
