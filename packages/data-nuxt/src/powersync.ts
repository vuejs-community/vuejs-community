import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'powersync',
  description: 'Offline-first sync with native Nuxt integration — auto-imported composables, built-in diagnostics, Nuxt DevTools integration, and optional Kysely for type-safe queries',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/powersync-ja/powersync-js',
    npm: 'https://npmjs.com/package/@powersync/nuxt',
    website: 'https://docs.powersync.com/intro/powersync-overview',
  },
  source: {
    github: 'powersync-ja/powersync-js#main/packages/nuxt',
    npm: '@powersync/nuxt',
  },
  stats: {
    stars: 720,
    downloads: {
      monthly: 480,
      weekly: 161,
    },
  },
})
