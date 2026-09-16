import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@immediately-run/dev-fs',
  description: 'Vite plugin that bridges immediately.run\'s async `fs` module (and Firestore-backed spaces) to your local disk during `vite dev`.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'immediately.run',
    'fs',
    'zenfs',
    'filesystem',
    'dev',
  ],
  source: {
    github: 'immediately-run/dev-fs',
    npm: '@immediately-run/dev-fs',
  },
  links: {
    github: 'https://github.com/immediately-run/dev-fs',
    npm: 'https://www.npmjs.com/package/@immediately-run/dev-fs',
    website: 'https://github.com/immediately-run/dev-fs#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1028,
      weekly: 49,
    },
  },
})
