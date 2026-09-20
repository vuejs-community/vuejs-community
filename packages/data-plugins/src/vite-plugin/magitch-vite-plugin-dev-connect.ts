import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@magitch/vite-plugin-dev-connect',
  description: 'Vite plugin for Magitch dev environment — injects preview bridge (preview-protocol) for cross-origin communication between IDE and sandbox preview, and receives runtime error reports from it into a log file the AI can read.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'magitch',
    'preview',
    'dev-tools',
    'iframe',
    'postmessage',
  ],
  links: {
    github: 'https://github.com/magitch/vite-plugin-dev-connect',
    npm: 'https://www.npmjs.com/package/@magitch/vite-plugin-dev-connect',
    website: 'https://magitch.app',
  },
  source: {
    github: 'magitch/vite-plugin-dev-connect',
    npm: '@magitch/vite-plugin-dev-connect',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 68,
      weekly: 5,
    },
  },
})
