import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mockingbirdjs/vite',
  description: 'Record your real backend once, develop locally forever. MSW-powered record/replay mocking for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'msw',
    'mock',
    'record',
    'replay',
    'fixtures',
  ],
  links: {
    github: 'https://github.com/wizenheimer/mockingbird',
    npm: 'https://www.npmjs.com/package/@mockingbirdjs/vite',
    website: 'https://github.com/wizenheimer/mockingbird#readme',
  },
  source: {
    github: 'wizenheimer/mockingbird',
    npm: '@mockingbirdjs/vite',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
