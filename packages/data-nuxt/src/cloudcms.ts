import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'cloudcms',
  description: 'CloudCMS Nuxt Module',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/gitana/cloudcms-nuxt',
    npm: 'https://npmjs.com/package/cloudcms-nuxt',
    website: 'https://github.com/gitana/cloudcms-nuxt',
  },
  source: {
    github: 'gitana/cloudcms-nuxt',
    npm: 'cloudcms-nuxt',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 79,
      weekly: 14,
    },
  },
})
