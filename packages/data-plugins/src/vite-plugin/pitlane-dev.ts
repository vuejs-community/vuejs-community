import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pitlane/dev',
  description: 'remix() — the Remix 3 Vite plugin: build orchestration, clientEntry() hydration transform, dev server with component and server-data HMR, SPA mode, build-time prerendering, and preview for any Vite or Vite+ project.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pitlane',
    'remix',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'pitlane-tools/pitlane',
    npm: '@pitlane/dev',
  },
  links: {
    github: 'https://github.com/pitlane-tools/pitlane',
    npm: 'https://www.npmjs.com/package/@pitlane/dev',
    website: 'https://pitlane.tools/package/dev/',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 1401,
      weekly: 289,
    },
  },
})
