import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'c15t',
  description: 'Consent management with cookie banners, privacy preferences, and consent-gated scripts.',
  icon: 'icon:c15t',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/c15t/c15t',
    npm: 'https://npmjs.com/package/@c15t/vue',
    website: 'https://c15t.com/docs/frameworks/nuxt/quickstart',
  },
  source: {
    github: 'c15t/c15t',
    npm: '@c15t/vue',
  },
})
