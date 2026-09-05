import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'shopware',
  description: 'Nuxt module that allows you to set up a Nuxt 3 project with Shopware Frontends.',
  category: 'nuxt',
  types: [
    'Ecommerce',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/shopware/frontends',
    npm: 'https://npmjs.com/package/@shopware/nuxt-module',
    website: 'https://developer.shopware.com/frontends/packages/nuxt-module.html',
  },
  source: {
    github: 'shopware/frontends#main/packages/nuxt-module',
    npm: '@shopware/nuxt-module',
  },
  stats: {
    stars: 228,
    downloads: {
      monthly: 13653,
      weekly: 2259,
    },
  },
})
