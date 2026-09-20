import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sentry',
  description: 'Sentry SDK for Nuxt',
  icon: 'icon:sentry',
  category: 'nuxt',
  types: [
    'Monitoring',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/getsentry/sentry-javascript',
    npm: 'https://npmjs.com/package/@sentry/nuxt',
    website: 'https://docs.sentry.io/platforms/javascript/guides/nuxt',
  },
  source: {
    github: 'getsentry/sentry-javascript',
    npm: '@sentry/nuxt',
  },
})
