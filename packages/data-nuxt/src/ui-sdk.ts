import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ui-sdk',
  description: 'Unstyled, accessible components with keyboard, focus, and screen reader support built in.',
  icon: 'icon:vercel',
  category: 'nuxt',
  types: [
    'UI Components',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vercel-labs/ui',
    npm: 'https://npmjs.com/package/@ui-sdk/vue',
    website: 'https://ui-sdk.dev/docs/vue',
  },
  source: {
    github: 'vercel-labs/ui',
    npm: '@ui-sdk/vue',
  },
})
