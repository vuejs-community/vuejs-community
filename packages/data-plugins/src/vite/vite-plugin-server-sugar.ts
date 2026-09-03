import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-server-sugar',
  description: 'Vite-first plugin that turns $server() calls into type-safe API endpoints bundled with Bun, with build-only Rollup and Rolldown entrypoints.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'rolldown-plugin',
    'vite',
    'rollup',
    'rolldown',
    'bun',
    'server-functions',
    'server',
    'fullstack',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dan2dev/vite-plugin-server-sugar',
    npm: 'https://www.npmjs.com/package/vite-plugin-server-sugar',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 0,
    },
  },
})
