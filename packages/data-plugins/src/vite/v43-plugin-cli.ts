import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin-cli',
  description: 'V43 CLI plugin for Vite — HTTP endpoint for sending commands to the browser',
  version: '0.1.10',
  category: 'plugin',
  tags: [
    'v43',
    'vite',
    'three',
    'threejs',
    'vite-plugin',
    'cli',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin-cli',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
