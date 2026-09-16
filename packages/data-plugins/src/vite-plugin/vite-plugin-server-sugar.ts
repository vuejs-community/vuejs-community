import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-server-sugar',
  description: 'Vite-first plugin that turns $server() calls into type-safe API endpoints bundled with Bun, with build-only Rollup and Rolldown entrypoints.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'dan2dev/vite-plugin-server-sugar',
    npm: 'vite-plugin-server-sugar',
  },
  links: {
    github: 'https://github.com/dan2dev/vite-plugin-server-sugar',
    npm: 'https://www.npmjs.com/package/vite-plugin-server-sugar',
    website: 'https://github.com/dan2dev/vite-plugin-server-sugar#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
