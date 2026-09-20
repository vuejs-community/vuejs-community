import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vttforge/vite-plugin',
  description: 'Vite plugin for Foundry VTT v14+ packages: browser ESM output with no hashing, CSS bundled, manifest copied with the version synced.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'foundryvtt',
    'vite-plugin',
    'hmr',
  ],
  links: {
    github: 'https://github.com/vttforge/vttforge',
    npm: 'https://www.npmjs.com/package/@vttforge/vite-plugin',
    website: 'https://github.com/vttforge/vttforge#readme',
  },
  source: {
    github: 'vttforge/vttforge',
    npm: '@vttforge/vite-plugin',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 584,
      weekly: 390,
    },
  },
})
