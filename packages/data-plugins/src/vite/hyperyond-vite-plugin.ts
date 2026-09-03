import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@hyperyond/vite-plugin',
  description: 'Vite plugin that injects the Hover chat widget into your dev server, so AI can drive your real Chrome.',
  version: '0.1.7',
  category: 'plugin',
  tags: [
    'hover',
    'vite',
    'vite-plugin',
    'playwright',
    'browser-testing',
    'claude',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Hyperyond/Hover',
    npm: 'https://www.npmjs.com/package/@hyperyond/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
