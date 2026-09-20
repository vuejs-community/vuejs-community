import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@brainfish-ai/wayfinder-vite-plugin',
  description: 'Vite plugin for @wayfinder/core — auto-injects data-tour attributes at build time so class obfuscation never breaks your tours',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'wayfinder',
    'vite-plugin',
    'product-tour',
    'onboarding',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@brainfish-ai/wayfinder-vite-plugin',
  },
  source: {
    npm: '@brainfish-ai/wayfinder-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
