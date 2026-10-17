import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'cookiehub',
  description: 'Nuxt module for the CookieHub consent platform: loads the consent dialog from nuxt.config, exposes a useCookieHub composable, and provides consent-blocked script components.',
  icon: 'icon:cookiehub',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/cookiehub-com/nuxt-cookiehub',
    npm: 'https://npmjs.com/package/nuxt-cookiehub',
    website: 'https://www.cookiehub.com',
  },
  source: {
    github: 'cookiehub-com/nuxt-cookiehub',
    npm: 'nuxt-cookiehub',
  },
})
