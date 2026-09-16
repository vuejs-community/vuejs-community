import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@s21g/vite-plugin-checker',
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
    npm: '@s21g/vite-plugin-checker',
  },
  links: {
    github: 'https://github.com/fi3ework/vite-plugin-checker',
    npm: 'https://www.npmjs.com/package/@s21g/vite-plugin-checker',
    website: 'https://github.com/fi3ework/vite-plugin-checker',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
