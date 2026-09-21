import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pitlane/dev',
  description: 'Vite plugin for Remix development and production builds.',
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
  links: {
    github: 'https://github.com/pitlane-tools/pitlane',
    npm: 'https://www.npmjs.com/package/@pitlane/dev',
    website: 'https://pitlane.tools/package/dev/',
  },
  source: {
    github: 'pitlane-tools/pitlane',
    npm: '@pitlane/dev',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 1401,
      weekly: 289,
    },
  },
})
