import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nola-lang/vite',
  description: 'Vite plugin for Nola (.tsi)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nola',
    'vite',
    'vite-plugin',
    'llm',
    'ai',
  ],
  links: {
    github: 'https://github.com/nola-lang/nola',
    npm: 'https://www.npmjs.com/package/@nola-lang/vite',
    website: 'https://github.com/nola-lang/nola#readme',
  },
  source: {
    github: 'nola-lang/nola',
    npm: '@nola-lang/vite',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 1071,
      weekly: 490,
    },
  },
})
