import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'link-checker',
  description: 'Find and magically fix links that may be negatively effecting your SEO.',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/harlan-zw/nuxt-link-checker',
    npm: 'https://npmjs.com/package/nuxt-link-checker',
    website: 'https://nuxtseo.com/docs/link-checker/getting-started/installation',
  },
  source: {
    github: 'harlan-zw/nuxt-link-checker',
    npm: 'nuxt-link-checker',
  },
  stats: {
    stars: 101,
    downloads: {
      monthly: 396593,
      weekly: 109932,
    },
  },
})
