import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@altack/vite-angular-preprocessor',
  description: 'Compile your Angular test specs using cypress-vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cypress',
    'angular preprocessor',
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: '@altack/vite-angular-preprocessor',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@altack/vite-angular-preprocessor',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 1,
    },
  },
})
