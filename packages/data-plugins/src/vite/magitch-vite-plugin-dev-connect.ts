import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@magitch/vite-plugin-dev-connect',
  description: 'Vite plugin for Magitch dev environment — injects preview bridge (preview-protocol) for cross-origin communication between IDE and sandbox preview, and receives runtime error reports from it into a log file the AI can read.',
  version: '1.4.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'magitch',
    'preview',
    'dev-tools',
    'iframe',
    'postmessage',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/magitch/vite-plugin-dev-connect',
    npm: 'https://www.npmjs.com/package/@magitch/vite-plugin-dev-connect',
  },
  stats: {
    downloads: {
      monthly: 101,
      weekly: 18,
    },
  },
})
