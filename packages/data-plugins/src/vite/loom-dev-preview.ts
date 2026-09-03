import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@loom-dev/preview',
  description: 'Loom source-first preview: run a roblox-ts UI source tree in the browser, via a Vite plugin.',
  version: '0.11.0',
  category: 'plugin',
  tags: [
    'loom',
    'roblox',
    'roblox-ts',
    'preview',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/astra-void/loom',
    npm: 'https://www.npmjs.com/package/@loom-dev/preview',
  },
  stats: {
    downloads: {
      monthly: 4946,
      weekly: 60,
    },
  },
})
