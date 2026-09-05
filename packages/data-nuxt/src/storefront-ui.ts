import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'storefront-ui',
  description: 'Storefront UI for Nuxt by Alokai',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vuestorefront/storefront-ui',
    npm: 'https://npmjs.com/package/@storefront-ui/nuxt',
    website: 'https://docs.storefrontui.io/v2/',
  },
  source: {
    github: 'vuestorefront/storefront-ui#v2-develop/packages/sfui/frameworks/nuxt',
    npm: '@storefront-ui/nuxt',
  },
  stats: {
    stars: 2508,
    downloads: {
      monthly: 10385,
      weekly: 3236,
    },
  },
})
