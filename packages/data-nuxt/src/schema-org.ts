import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'schema-org',
  description: 'Quick and easy Schema.org graphs.',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/harlan-zw/nuxt-schema-org',
    npm: 'https://npmjs.com/package/nuxt-schema-org',
    website: 'https://nuxtseo.com/docs/schema-org/getting-started/installation',
  },
  source: {
    github: 'harlan-zw/nuxt-schema-org',
    npm: 'nuxt-schema-org',
  },
  stats: {
    stars: 195,
    downloads: {
      monthly: 546987,
      weekly: 145395,
    },
  },
})
