import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-convex-module',
  description: 'Convex backend integration with live queries, mutations, actions, pagination, file storage and SSR, auto-imported and typed against your deployment.',
  icon: 'icon:nuxt-convex-module',
  category: 'nuxt',
  types: [
    'Backend & Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/qruto/nuxt-convex-module',
    npm: 'https://npmjs.com/package/nuxt-convex-module',
    website: 'https://nuxt-convex-module.dev',
  },
  source: {
    github: 'qruto/nuxt-convex-module',
    npm: 'nuxt-convex-module',
  },
})
