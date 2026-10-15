import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-safe-runtime-config',
  description: 'Validate runtime config with Standard Schema at build or runtime, with optional Shelve secrets integration.',
  icon: 'icon:nuxt-safe-runtime-config',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/onmax/nuxt-safe-runtime-config',
    npm: 'https://npmjs.com/package/nuxt-safe-runtime-config',
    website: 'https://nuxt-safe-runtime-config.onmax.me',
  },
  source: {
    github: 'onmax/nuxt-safe-runtime-config',
    npm: 'nuxt-safe-runtime-config',
  },
})
