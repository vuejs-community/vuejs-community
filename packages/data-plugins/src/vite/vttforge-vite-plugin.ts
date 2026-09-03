import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vttforge/vite-plugin',
  description: 'Vite plugin for Foundry VTT v13+ packages: browser ESM output with no hashing, CSS bundled, manifest copied with the version synced.',
  version: '0.4.2',
  category: 'plugin',
  tags: [
    'foundryvtt',
    'vite-plugin',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vttforge/vttforge',
    npm: 'https://www.npmjs.com/package/@vttforge/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 6,
    },
  },
})
