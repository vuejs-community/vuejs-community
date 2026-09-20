import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin-cli',
  description: 'V43 CLI plugin for Vite — HTTP endpoint for sending commands to the browser',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'v43',
    'vite',
    'three',
    'threejs',
    'vite-plugin',
    'cli',
  ],
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin-cli',
    website: 'https://github.com/drawcall-ai/v43#readme',
  },
  source: {
    github: 'drawcall-ai/v43',
    npm: '@v43/plugin-cli',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
