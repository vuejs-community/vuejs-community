import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-checker-biome-support',
  description: 'Vite plugin that runs TypeScript type checker on a separate process.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  source: {
    github: 'jonondarnad/vite-plugin-checker',
    npm: 'vite-plugin-checker-biome-support',
  },
  links: {
    github: 'https://github.com/jonondarnad/vite-plugin-checker',
    npm: 'https://www.npmjs.com/package/vite-plugin-checker-biome-support',
    website: 'https://github.com/fi3ework/vite-plugin-checker',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 4,
      weekly: 0,
    },
  },
})
