import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kylewlacy/vite-plugin-checker',
  description: '[Fork] Vite plugin that runs TypeScript type checker on a separate process.',
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
    github: 'https://github.com/kylewlacy/vite-plugin-checker',
    npm: 'https://www.npmjs.com/package/@kylewlacy/vite-plugin-checker',
    website: 'https://github.com/kylewlacy/vite-plugin-checker',
  },
  source: {
    github: 'kylewlacy/vite-plugin-checker',
    npm: '@kylewlacy/vite-plugin-checker',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
