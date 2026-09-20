import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@serogodsky/vite-plugin-checker',
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
  links: {
    github: 'https://github.com/fi3ework/vite-plugin-checker',
    npm: 'https://www.npmjs.com/package/@serogodsky/vite-plugin-checker',
    website: 'https://github.com/fi3ework/vite-plugin-checker',
  },
  source: {
    github: 'fi3ework/vite-plugin-checker',
    npm: '@serogodsky/vite-plugin-checker',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
