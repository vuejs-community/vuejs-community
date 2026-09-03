import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mockingbirdjs/vite',
  description: 'Record your real backend once, develop locally forever. MSW-powered record/replay mocking for Vite.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'msw',
    'mock',
    'record',
    'replay',
    'fixtures',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wizenheimer/mockingbird',
    npm: 'https://www.npmjs.com/package/@mockingbirdjs/vite',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 6,
    },
  },
})
