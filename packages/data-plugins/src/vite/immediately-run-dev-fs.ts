import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@immediately-run/dev-fs',
  description: 'Vite plugin that bridges immediately.run\'s async `fs` module (and Firestore-backed spaces) to your local disk during `vite dev`.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'immediately.run',
    'fs',
    'zenfs',
    'filesystem',
    'dev',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/immediately-run/dev-fs',
    npm: 'https://www.npmjs.com/package/@immediately-run/dev-fs',
  },
  stats: {
    downloads: {
      monthly: 975,
      weekly: 827,
    },
  },
})
