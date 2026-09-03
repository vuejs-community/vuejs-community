import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pitlane/dev',
  description: 'remix() — the Remix 3 Vite plugin: build orchestration, clientEntry() hydration transform, dev server with component and server-data HMR, SPA mode, build-time prerendering, and preview for any Vite or Vite+ project.',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'pitlane',
    'remix',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pitlane-tools/pitlane',
    npm: 'https://www.npmjs.com/package/@pitlane/dev',
  },
  stats: {
    downloads: {
      monthly: 1121,
      weekly: 525,
    },
  },
})
