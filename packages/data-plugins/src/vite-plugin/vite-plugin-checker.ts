import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-checker',
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
    github: 'fi3ework/vite-plugin-checker',
    npm: 'vite-plugin-checker',
  },
  links: {
    github: 'https://github.com/fi3ework/vite-plugin-checker',
    npm: 'https://www.npmjs.com/package/vite-plugin-checker',
    website: 'https://github.com/fi3ework/vite-plugin-checker',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13559386,
      weekly: 2550334,
    },
  },
})
