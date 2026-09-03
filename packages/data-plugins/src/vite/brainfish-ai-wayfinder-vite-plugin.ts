import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@brainfish-ai/wayfinder-vite-plugin',
  description: 'Vite plugin for @wayfinder/core — auto-injects data-tour attributes at build time so class obfuscation never breaks your tours',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'wayfinder',
    'vite-plugin',
    'product-tour',
    'onboarding',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@brainfish-ai/wayfinder-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
