import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@loom-dev/preview',
  description: 'Loom source-first preview: run a roblox-ts UI source tree in the browser, via a Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'loom',
    'roblox',
    'roblox-ts',
    'preview',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/astra-void/loom',
    npm: 'https://www.npmjs.com/package/@loom-dev/preview',
    website: 'https://github.com/astra-void/loom#readme',
  },
  source: {
    github: 'astra-void/loom',
    npm: '@loom-dev/preview',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 468,
      weekly: 230,
    },
  },
})
