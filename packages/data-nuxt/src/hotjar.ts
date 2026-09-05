import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'hotjar',
  description: 'Add HotJar to your Nuxt application',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/damevin/nuxt-module-hotjar',
    npm: 'https://npmjs.com/package/nuxt-module-hotjar',
    website: 'https://github.com/damevin/nuxt-module-hotjar',
  },
  source: {
    github: 'damevin/nuxt-module-hotjar',
    npm: 'nuxt-module-hotjar',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 8106,
      weekly: 1846,
    },
  },
})
