import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aegisrunner/vite',
  description: 'Vite plugin that attaches AegisRunner to your dev server — scan your localhost app with AI, no deploy. Covers Vue, React, Svelte and the rest of the Vite ecosystem.',
  version: '0.4.2',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Aegis-Runner/AegisRunner',
    npm: 'https://www.npmjs.com/package/@aegisrunner/vite',
  },
  stats: {
    downloads: {
      monthly: 99,
      weekly: 5,
    },
  },
})
