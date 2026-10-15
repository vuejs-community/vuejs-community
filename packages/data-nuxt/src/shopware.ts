import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'shopware',
  description: 'Set up a project with Shopware Frontends.',
  icon: 'icon:shopware',
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
    github: 'shopware/frontends',
    npm: '@shopware/nuxt-module',
  },
})
