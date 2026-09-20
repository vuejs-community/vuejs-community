import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@artursapek/vite-plugin-checker',
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
    npm: 'https://www.npmjs.com/package/@artursapek/vite-plugin-checker',
    website: 'https://github.com/fi3ework/vite-plugin-checker',
  },
  source: {
    github: 'fi3ework/vite-plugin-checker',
    npm: '@artursapek/vite-plugin-checker',
  },
  stats: {
    stars: 1240,
    downloads: {
      monthly: 141,
      weekly: 18,
    },
  },
})
