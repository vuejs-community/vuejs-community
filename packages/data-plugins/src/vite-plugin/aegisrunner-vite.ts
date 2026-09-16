import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aegisrunner/vite',
  description: 'Vite plugin that attaches AegisRunner to your dev server — scan your localhost app with AI, no deploy. Covers Vue, React, Svelte and the rest of the Vite ecosystem.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'testing',
    'e2e',
    'regression',
    'ai-testing',
    'aegisrunner',
    'localhost',
  ],
  source: {
    github: 'Aegis-Runner/AegisRunner',
    npm: '@aegisrunner/vite',
  },
  links: {
    github: 'https://github.com/Aegis-Runner/AegisRunner',
    npm: 'https://www.npmjs.com/package/@aegisrunner/vite',
    website: 'https://aegisrunner.com',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 53,
      weekly: 4,
    },
  },
})
