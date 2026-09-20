import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rue-js/rsc',
  description: 'Rue-owned RSC runtime and Vite integration.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rsc',
    'rue',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hunzhiwange/ruejs',
    npm: 'https://www.npmjs.com/package/@rue-js/rsc',
    website: 'https://github.com/hunzhiwange/ruejs/tree/main/packages/rue-rsc#readme',
  },
  source: {
    github: 'hunzhiwange/ruejs',
    npm: '@rue-js/rsc',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 2437,
      weekly: 678,
    },
  },
})
