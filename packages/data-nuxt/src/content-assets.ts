import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'content-assets',
  description: 'Enable locally-located assets in Nuxt Content',
  category: 'nuxt',
  types: [
    'Images',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/davestewart/nuxt-content-assets',
    npm: 'https://npmjs.com/package/nuxt-content-assets',
    website: 'https://davestewart.co.uk/projects/vue/nuxt-content-assets/',
  },
  source: {
    github: 'davestewart/nuxt-content-assets',
    npm: 'nuxt-content-assets',
  },
  stats: {
    stars: 124,
    downloads: {
      monthly: 1574,
      weekly: 351,
    },
  },
})
