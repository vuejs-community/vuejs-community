import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-callapp',
  description: 'Open your native app from mobile web pages (scheme, intent and universal links with app store fallback) using callapp-lib',
  icon: 'icon:callapp',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/xjccc/nuxt-callapp',
    npm: 'https://npmjs.com/package/nuxt-callapp',
    website: 'https://github.com/xjccc/nuxt-callapp',
  },
  source: {
    github: 'xjccc/nuxt-callapp',
    npm: 'nuxt-callapp',
  },
})
